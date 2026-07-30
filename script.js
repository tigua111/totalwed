const simulators = [
  {
    id: 'louis-xvi',
    title: '路易十六模擬器',
    description: '體驗路易十六沒頭有尾的人生。',
    url: 'https://tigua111.github.io/Louis-XVI-simulator/',
    iconName: 'crown',
    tags: ['歷史', '萬事起頭難', '地域'],
    colorClasses: 'from-amber-500/20 to-orange-600/20 text-amber-500 border-amber-500/30'
  },
  {
    id: 'sima-qian',
    title: '司馬遷模擬器',
    description: '來體驗遷哥丟失可愛小雞的故事',
    url: 'https://tigua111.github.io/Sima-Qian-Simulator/',
    iconName: 'scroll-text',
    tags: ['小雞', '遷哥', '傳記'],
    colorClasses: 'from-blue-500/20 to-indigo-600/20 text-blue-500 border-blue-500/30'
  },
  {
    id: 'bo-yikao',
    title: '伯邑考模擬器',
    description: '體驗伯邑考成為美食大臣的故事',
    url: 'https://tigua111.github.io/Bo-Yikao-Meatball-Simulator/',
    iconName: 'utensils',
    tags: ['美食', '伯邑考', '傳記'],
    colorClasses: 'from-red-500/20 to-rose-600/20 text-red-500 border-red-500/30'
  },
  {
    id: 'jesus',
    title: '耶穌模擬器',
    description: '體驗隻手無法遮天的人生]',
    url: 'https://tigua111.github.io/jesus-simulator/',
    iconName: 'church',
    tags: ['耶穌', '信仰', '受難'],
    colorClasses: 'from-yellow-500/20 to-amber-600/20 text-yellow-500 border-yellow-500/30'
  },
  {
    id: 'time-machine',
    title: '真正的時光機',
    description: '浪費你時間的時光機。',
    url: 'https://tigua111.github.io/timemashinREAL/',
    iconName: 'history',
    tags: ['科幻', '時空旅行', '工具'],
    colorClasses: 'from-cyan-500/20 to-teal-600/20 text-cyan-500 border-cyan-500/30'
  },
  {
    id: 'zilu',
    title: '子路模擬器',
    description: '品嘗子路牌肉醬漢堡',
    url: 'https://tigua111.github.io/Zilu-Simulator/',
    iconName: 'swords',
    tags: ['肉醬', '漢堡', '子路牌肉醬'],
    colorClasses: 'from-emerald-500/20 to-green-600/20 text-emerald-500 border-emerald-500/30'
  },
  {
    id: 'qu-yuan',
    title: '屈原模擬器',
    description: '體驗跳水的快樂',
    url: 'https://tigua111.github.io/Qu-Yuan/',
    iconName: 'waves',
    tags: ['跳水', '獵奇', '意想不到'],
    colorClasses: 'from-sky-500/20 to-cyan-600/20 text-sky-500 border-sky-500/30'
  }
];

const STORAGE_KEY = 'museum-custom-simulators';

function loadCustomSimulators() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.warn('無法讀取自訂網站資料:', error);
    return [];
  }
}

function saveCustomSimulators(customSimulators) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customSimulators));
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('圖片讀取失敗'));
    reader.readAsDataURL(file);
  });
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function buildCardHTML(sim) {
  const colors = sim.colorClasses.split(' ');
  const bgFrom = colors[0];
  const bgTo = colors[1];
  const textCol = colors[2];
  const borderCol = colors[3] || 'border-slate-800';
  const tagsHtml = (sim.tags || []).filter(Boolean).map(tag =>
    `<span class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-950 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors">#${tag}</span>`
  ).join('');

  return `
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br ${bgFrom} ${bgTo} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
    
    <div class="flex items-start justify-between mb-4">
        <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 ${textCol} shadow-inner">
            <i data-lucide="${sim.iconName}"></i>
        </div>
        <i data-lucide="external-link" class="text-slate-600 group-hover:text-slate-300 transition-colors w-5 h-5"></i>
    </div>
    
    <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
        ${sim.title}
    </h3>
    
    <p class="text-slate-400 text-sm leading-relaxed mb-6">
        ${sim.description}
    </p>

    <div class="flex flex-wrap gap-2 mt-auto">
        ${tagsHtml}
    </div>
  `;
}

function attachCardImage(card, sim) {
  const img = document.createElement('img');
  img.alt = sim.title;
  img.className = 'card-image hidden md:block';

  if (sim.thumbnailDataUrl) {
    img.src = sim.thumbnailDataUrl;
    card.appendChild(img);
    return;
  }

  if (sim.thumbnailUrl) {
    img.src = sim.thumbnailUrl;
    img.onerror = () => {
      img.remove();
    };
    card.appendChild(img);
    return;
  }

  const folders = ['./photos/', './範例照片/'];
  const exts = ['.jpg', '.jpeg', '.png', '.webp'];
  const altNames = {
    'louis-xvi': '路易十六',
    'sima-qian': '司馬遷',
    'bo-yikao': '伯邑考',
    'jesus': '耶穌',
    'time-machine': '真正的時光機',
    'zilu': '子路'
  };

  const candidates = [];
  exts.forEach(ext => {
    folders.forEach(folder => candidates.push(folder + sim.id + ext));
  });

  const alt = altNames[sim.id];
  if (alt) {
    exts.forEach(ext => {
      folders.forEach(folder => candidates.push(folder + alt + ext));
    });
  }

  const titleShort = sim.title.replace(/模擬器/g, '').trim();
  if (titleShort && titleShort !== alt) {
    exts.forEach(ext => {
      folders.forEach(folder => candidates.push(folder + titleShort + ext));
    });
  }

  let index = 0;
  const tryNext = () => {
    if (index >= candidates.length) {
      img.remove();
      return;
    }
    img.src = candidates[index++];
  };

  img.onerror = tryNext;
  card.appendChild(img);
  tryNext();
}

function renderSimulators(customSimulators, removeMode = false) {
  const grid = document.getElementById('simulators-grid');
  if (!grid) {
    return;
  }

  grid.innerHTML = '';
  const allSimulators = [...simulators, ...customSimulators];

  allSimulators.forEach((sim, index) => {
    const colors = sim.colorClasses.split(' ');
    const borderCol = colors[3] || 'border-slate-800';

    const card = document.createElement('div');
    card.className = `group simulator-card block relative p-6 pr-32 rounded-2xl bg-slate-900/50 backdrop-blur-sm border ${borderCol} transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:bg-slate-900 card-enter`;
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = buildCardHTML(sim);

    if (removeMode) {
      const removeButton = document.createElement('button');
      removeButton.type = 'button';
      removeButton.className = 'remove-button';
      removeButton.innerHTML = '<i data-lucide="minus"></i>';
      removeButton.setAttribute('aria-label', `移除 ${sim.title}`);
      card.appendChild(removeButton);
    }

    const link = document.createElement('a');
    link.href = sim.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'absolute inset-0 block';
    link.setAttribute('aria-label', sim.title);
    card.appendChild(link);

    grid.appendChild(card);
    attachCardImage(card, sim);
  });

  lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    // 觸發 Header 動畫
    const header = document.getElementById('header');
    header.classList.add('fade-in-up');

    const tickerText = document.getElementById('ticker-text');
    const tickerMessages = [
      '全新模擬器正在陸續上線，記得常回來看看最新內容。',
      'Logitech G優惠碼:LOGITIGUA，全館享九折優惠!',
      '如果你也有好點子，歡迎一起設計網站跟我分享討論!。',
      '你們的留言我都有看，但有些珍很難做，再給我一點時間!',
      '做事請有頭有尾，不要像路易十六',
      '做個能隻手遮天的人，不要像耶穌一樣漏風',
      '子路牌肉醬非常好吃',
    ];

    if (tickerText) {
      let tickerIndex = 0;

      const rotateTicker = () => {
        tickerText.classList.remove('is-visible');
        tickerText.classList.add('is-hidden');

        setTimeout(() => {
          tickerIndex = (tickerIndex + 1) % tickerMessages.length;
          tickerText.textContent = tickerMessages[tickerIndex];
          tickerText.classList.remove('is-hidden');
          tickerText.classList.add('is-visible');
        }, 350);
      };

      tickerText.textContent = tickerMessages[0];
      tickerText.classList.add('is-visible');
      setInterval(rotateTicker, 5000);
    }

    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      const revealContact = () => {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          contactSection.classList.add('is-visible');
        }
      };

      revealContact();
      window.addEventListener('scroll', revealContact, { passive: true });
      window.addEventListener('resize', revealContact);
    }

    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');
    const recipientEmail = 'xxuege@gmail.com';

    if (contactForm && contactStatus) {
      contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const payload = {
          name: formData.get('name')?.toString().trim() || '',
          email: formData.get('email')?.toString().trim() || '',
          phone: formData.get('phone')?.toString().trim() || '',
          message: formData.get('message')?.toString().trim() || '',
          _subject: '新留言來自奇妙模擬器博物館',
          _captcha: 'false'
        };

        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.innerHTML = '<i data-lucide="loader-circle" class="animate-spin"></i> 發送中...';
          lucide.createIcons();
        }

        try {
          const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            throw new Error('送出失敗');
          }

          contactStatus.textContent = '訊息已成功送出，感謝你的聯絡。';
          contactForm.reset();
        } catch (error) {
          contactStatus.textContent = '訊息送出時發生問題，請稍後再試。';
        } finally {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = '<i data-lucide="send"></i> 發送訊息';
            lucide.createIcons();
          }
        }
      });
    }

    let customSimulators = loadCustomSimulators();
    let removeMode = false;

    const renderCurrentView = () => {
      renderSimulators(customSimulators, removeMode);
      document.body.classList.toggle('remove-mode', removeMode);
    };

    renderCurrentView();

    const settingsToggle = document.getElementById('settings-toggle');
    const settingsMenu = document.getElementById('settings-menu');
    const toggleRemoveModeButton = document.getElementById('toggle-remove-mode');
    const openModalButton = document.getElementById('open-add-site-modal');
    const closeModalButton = document.getElementById('close-add-site-modal');
    const addSiteModal = document.getElementById('add-site-modal');
    const addSiteForm = document.getElementById('add-site-form');
    const addSiteStatus = document.getElementById('add-site-status');

    const openModal = () => {
      addSiteModal?.classList.add('is-open');
      addSiteModal?.classList.remove('hidden');
      addSiteModal?.classList.add('flex');
      settingsMenu?.classList.add('hidden');
    };

    const closeModal = () => {
      addSiteModal?.classList.remove('is-open');
      addSiteModal?.classList.add('hidden');
      addSiteModal?.classList.remove('flex');
      if (addSiteForm) {
        addSiteForm.reset();
      }
      if (addSiteStatus) {
        addSiteStatus.textContent = '新增後會直接出現在主頁卡片下方。';
      }
    };

    settingsToggle?.addEventListener('click', () => {
      const password = window.prompt('請輸入設定密碼：');
      if (password !== '951107') {
        if (password !== null) {
          window.alert('密碼錯誤，無法開啟設定。');
        }
        return;
      }

      settingsMenu?.classList.toggle('hidden');
    });

    toggleRemoveModeButton?.addEventListener('click', () => {
      removeMode = !removeMode;
      settingsMenu?.classList.add('hidden');
      if (toggleRemoveModeButton) {
        toggleRemoveModeButton.innerHTML = `<i data-lucide="${removeMode ? 'check' : 'trash-2'}"></i><span>${removeMode ? '退出移除' : '移除網站'}</span>`;
        lucide.createIcons();
      }
      renderCurrentView();
    });

    openModalButton?.addEventListener('click', openModal);
    closeModalButton?.addEventListener('click', closeModal);
    addSiteModal?.addEventListener('click', (event) => {
      if (event.target === addSiteModal) {
        closeModal();
      }
    });

    addSiteForm?.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(addSiteForm);
      const title = (formData.get('title') || '').toString().trim();
      const description = (formData.get('description') || '').toString().trim();
      const url = (formData.get('url') || '').toString().trim();
      const tagsInput = (formData.get('tags') || '').toString().trim();
      const thumbnailFile = formData.get('thumbnail');

      if (!title || !description || !url) {
        if (addSiteStatus) {
          addSiteStatus.textContent = '請至少填寫網站連結、名稱與介紹。';
        }
        return;
      }

      const tags = tagsInput
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean);

      let thumbnailDataUrl = '';
      if (thumbnailFile && thumbnailFile instanceof File && thumbnailFile.size > 0) {
        thumbnailDataUrl = await readFileAsDataURL(thumbnailFile);
      }

      const newSite = {
        id: slugify(title),
        title,
        description,
        url,
        iconName: 'globe',
        tags,
        thumbnailDataUrl,
        colorClasses: 'from-violet-500/20 to-fuchsia-600/20 text-violet-500 border-violet-500/30'
      };

      customSimulators = [newSite, ...customSimulators];
      saveCustomSimulators(customSimulators);
      renderCurrentView();
      closeModal();

      if (addSiteStatus) {
        addSiteStatus.textContent = '網站已新增，正在更新主頁。';
      }
    });

    document.addEventListener('click', (event) => {
      const removeButton = event.target.closest('.remove-button');
      if (!removeButton) {
        return;
      }

      const card = removeButton.closest('.simulator-card');
      const title = card?.querySelector('h3')?.textContent?.trim();
      const confirmed = window.confirm(`確定要刪除「${title || '這個網站'}」嗎？`);
      if (!confirmed) {
        return;
      }

      const currentIndex = Array.from(document.querySelectorAll('#simulators-grid .simulator-card')).indexOf(card);
      const allSimulators = [...simulators, ...customSimulators];
      const target = allSimulators[currentIndex];
      if (!target) {
        return;
      }

      if (target.id && !simulators.some(item => item.id === target.id)) {
        customSimulators = customSimulators.filter(item => item.id !== target.id);
      }

      saveCustomSimulators(customSimulators);
      renderCurrentView();
    });

    // 渲染 Lucide Icons
    lucide.createIcons();
});
