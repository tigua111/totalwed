const simulators = [
  {
    id: 'dongzhuo',
    title: '董卓模擬器',
    description: '點燃董卓的肚子，看誰能燒最久?',
    url: 'https://dongzhuo.manus.space',
    iconName: 'waves',
    tags: ['燃燒', '肚子', '比賽'],
    colorClasses: 'from-cyan-500/20 to-teal-600/20 text-cyan-500 border-cyan-500/30'
  },
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
  },
  {
    id: 'shonyan',
    title: '商鞅模擬器',
    description: '體驗商鞅變法把身體變五塊',
    url: 'https://tigua111.github.io/SHONYAN/',
    iconName: 'scale',
    tags: ['變法', '五塊', '商鞅'],
    colorClasses: 'from-sky-500/20 to-cyan-600/20 text-sky-500 border-sky-500/30'
  },
  {
    id: 'king',
    title: '晉景公模擬器',
    description: '體驗糞坑裡面游泳',
    url: 'https://tigua111.github.io/King-Jing-s-Latrine-Simulator/',
    iconName: 'scale',
    tags: ['糞坑', '游泳', '晉景公'],
    colorClasses: 'from-sky-500/20 to-cyan-600/20 text-sky-500 border-sky-500/30'
  },
  {
    id: 'lisii',
    title: '李斯模擬器',
    description: '體驗如何被凌虐成五塊',
    url: 'https://tigua111.github.io/lisisss/',
    iconName: 'scroll-text',
    tags: ['五塊', '羞辱', '凌虐'],
    colorClasses: 'from-sky-500/20 to-cyan-600/20 text-sky-500 border-sky-500/30'
  },
  {
    id: 'HitlerSimulator',
    title: '希特勒模擬器',
    description: '來被希特勒罵一下',
    url: 'https://tigua111.github.io/Hitler-Simulator/',
    iconName: 'crown',
    tags: ['希特勒', '納粹', '罵人'],
    colorClasses: 'from-sky-500/20 to-cyan-600/20 text-sky-500 border-sky-500/30'
  }
];

const defaultCustomSimulators = [
  {
    id: 'zji',
    title: '距思日記',
    description: '讓異地情侶們有個互相傾訴的小空間',
    url: 'https://tigua111.github.io/ourpage1.0/index.html#',
    iconName: 'history',
    tags: ['愛情', '異地', '工具'],
    colorClasses: 'from-cyan-500/20 to-teal-600/20 text-cyan-500 border-cyan-500/30'
  },
  {
    id: 'time',
    title: '數位時光膠囊',
    description: '線上時光膠囊，記錄下現在的你，未來回來一起看看當初的你',
    url: 'https://tigua111.github.io/-Digital-Time-Capsule/',
    iconName: 'history',
    tags: ['膠囊', '時光', '工具'],
    colorClasses: 'from-cyan-500/20 to-teal-600/20 text-cyan-500 border-cyan-500/30'
  },
  {
    id: 'Confession',
    title: '告白網站',
    description: '妳願意跟我再一起嗎?沒有不願意',
    url: 'https://tigua111.github.io/-/',
    iconName: 'waves',
    tags: ['告白', '拒絕', '工具'],
    colorClasses: 'from-cyan-500/20 to-teal-600/20 text-cyan-500 border-cyan-500/30'
  },
  {
    id: 'lision',
    title: '傾聽網',
    description: '跟素未謀面的人傾訴',
    url: 'https://listeningweb.manus.space/',
    iconName: 'history',
    tags: ['傾訴', '傷心', '聊天'],
    colorClasses: 'from-cyan-500/20 to-teal-600/20 text-cyan-500 border-cyan-500/30'
  },
  {
    id: 'school',
    title: '校評集',
    description: '選課前就了解老師的修課狀況!',
    url: 'https://twprof-rat-3d5ck3dc.manus.space/?code=bMk2Sev6c623pXUpJVxzV2',
    iconName: 'history',
    tags: ['大學', '修課', '老師'],
    colorClasses: 'from-cyan-500/20 to-teal-600/20 text-cyan-500 border-cyan-500/30'
  }
];

const STORAGE_KEY = 'museum-custom-simulators';

function loadCustomSimulators() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return [];
    }
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('無法讀取自訂網站資料:', error);
    localStorage.removeItem(STORAGE_KEY);
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
    'zilu': '子路',
    'zji': '聚思日記',
    'time': '數位時光膠囊',
    'shonyan': '商鞅',
    'king': '晉景公',
    'Confession': '告白',
    'lisii' : '李斯',
    'HitlerSimulator': '希特勒',
    'dongzhuo': '董卓',
    'lision': '傾聽網',
    'school': '校評集'
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

function createSimulatorCard(sim, index, removeMode = false) {
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

  attachCardImage(card, sim);
  return card;
}

function renderSimulators(customSimulators, removeMode = false) {
  const grid = document.getElementById('simulators-grid');
  const customGrid = document.getElementById('custom-simulators-grid');
  const customEmpty = document.getElementById('custom-simulators-empty');
  if (!grid || !customGrid || !customEmpty) {
    return;
  }

  grid.innerHTML = '';
  customGrid.innerHTML = '';

  simulators.forEach((sim, index) => {
    const card = createSimulatorCard(sim, index, removeMode);
    grid.appendChild(card);
  });

  if (customSimulators.length === 0) {
    customEmpty.classList.remove('hidden');
  } else {
    customEmpty.classList.add('hidden');
    customSimulators.forEach((sim, index) => {
      const card = createSimulatorCard(sim, index, removeMode);
      customGrid.appendChild(card);
    });
  }

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

    let customSimulators = [...defaultCustomSimulators, ...loadCustomSimulators()];
    let removeMode = false;

    const renderCurrentView = () => {
      renderSimulators(customSimulators, removeMode);
      document.body.classList.toggle('remove-mode', removeMode);
    };

    renderCurrentView();

    const infoTabButtons = document.querySelectorAll('#info-panel .info-tab');
    const infoPage = document.getElementById('info-page');
    const infoPageTitle = document.getElementById('info-page-title');
    const infoPageLabel = document.getElementById('info-page-label');
    const infoPageContent = document.getElementById('info-page-content');
    const infoPageClose = document.getElementById('info-page-close');

    const infoPanelHtml = {
      author: `
        <div class="space-y-4">
          <div class="grid gap-3 md:grid-cols-[auto_1fr] items-center">
            <div class="author-photo rounded-3xl border border-slate-800 bg-slate-900/70 text-slate-500 flex aspect-square h-24 items-center justify-center text-xs uppercase tracking-[0.25em]">
              作者照片
            </div>
            <div class="space-y-1">
              <p class="text-sm uppercase tracking-[0.25em] text-indigo-300">網站製作</p>
              <h3 class="text-lg font-semibold text-white">地瓜 / 呂學恩</h3>
              <p class="text-xs text-slate-500">奇怪模擬器的弄潮者，喜歡把古代人物做成奇怪遊戲。</p>
            </div>
          </div>
          <div class="space-y-2 text-slate-400">
            <p>這裡是我整理的模擬器合集與怪奇創意實驗室。未來會持續加入更多功能、故事與互動。</p>
            <p>你可以把這個空間當成我的創作展示櫃，照片與更多介紹會在後續版本補上。</p>
          </div>
        </div>
      `,
      changelog: `
        <div class="space-y-3">
          <div class="log-entry rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
            <span class="log-date">2026-08-20</span>
            <span class="log-detail">新增董卓模擬器&傾聽網</span>
          </div>
          <div class="log-entry rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
            <span class="log-date">2026-08-02</span>
            <span class="log-detail">新增希特勒模擬器</span>
          </div>
          <div class="log-entry rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
            <span class="log-date">2026-08-01</span>
            <span class="log-detail">新增晉景公模擬器&新增了網頁類別區分</span>
          </div>
          <div class="log-entry rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
            <span class="log-date">2026-07-31</span>
            <span class="log-detail">新增三條線下拉式選單與互動資訊面板。</span>
            <span class="log-bug">BUG除錯：修正懸停選單消失問題。</span>
          </div>
          <div class="log-entry rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
            <span class="log-date">2026-07-28</span>
            <span class="log-detail">新增作者介紹與更新日誌格式展示。</span>
            <span class="log-bug">BUG除錯：調整小尺寸視窗佈局。</span>
          </div>
          <div class="log-entry rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
            <span class="log-date">2026-07-20</span>
            <span class="log-detail">提高主頁卡片互動感，加入光暈效果。</span>
            <span class="log-bug">BUG除錯：修正圖片載入閃爍。</span>
          </div>
        </div>
      `,
      plan: `
        <div class="space-y-4">
          <p class="text-slate-400">以下為留言區我看到的預計製作名單，實際製作未來將透過抽籤決定</p>
          <button id="ritual-button" type="button" class="ritual-button inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-3 text-sm font-medium text-indigo-200 transition hover:bg-indigo-500/20">
            <span>公布預計開發項目</span>
          </button>
          <div id="ritual-steps" class="ritual-steps hidden space-y-3 pt-2">
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>1.</strong> 科比模擬器 
            </div>
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>2.</strong> 俞鴻圖 
            </div>
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>3.</strong> 李斯 <span class="text-emerald-400 font-semibold ml-2">✓</span>
            </div>
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>4.</strong> 司馬遷 
            </div>
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>5.</strong> 鐵木真
            </div> 
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>6.</strong> 韓愈
            </div>
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>7.</strong> 比干
            </div> 
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>8.</strong> 拉瓦節的讀秒模擬器
            </div>  
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>9.</strong> 董卓 <span class="text-emerald-400 font-semibold ml-2">✓</span>
            </div>  
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>10.</strong> 趙雲七進七出
            </div>  
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>11.</strong> 戚夫人
            </div>  
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>12.</strong> 雙子星大樓
            </div>   
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>13.</strong> 性感習近平
            </div>
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>14.</strong> 崇禎
            </div>
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>15.</strong> 甘迺迪
            </div>
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>16.</strong> 史達林
            </div>
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>17.</strong> 方孝孺
            </div>
            <div class="plan-step rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
              <strong>17.</strong> 希特勒 <span class="text-emerald-400 font-semibold ml-2">✓</span>
            </div>
          </div>
        </div>
      `
    };

    const setInfoTab = (tabName) => {
      infoTabButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.tab === tabName);
      });
    };

    const openInfoPage = (tabName) => {
      const pageTitles = {
        author: '作者介紹',
        changelog: '更新日誌',
        plan: '預備開發模擬器順序'
      };

      if (!infoPage || !infoPageTitle || !infoPageLabel || !infoPageContent) {
        return;
      }

      infoPageLabel.textContent = '內頁瀏覽';
      infoPageTitle.textContent = pageTitles[tabName] || '作者介紹';
      infoPageContent.innerHTML = infoPanelHtml[tabName] || infoPanelHtml.author;
      infoPage.classList.remove('hidden');
      infoPage.classList.add('open');
    };

    document.addEventListener('click', (event) => {
      const ritualButton = event.target.closest('#ritual-button');
      if (!ritualButton) return;

      const ritualSteps = document.getElementById('ritual-steps');
      if (!ritualSteps) return;

      const isVisible = !ritualSteps.classList.toggle('hidden');
      ritualButton.textContent = isVisible ? '儀式已啟動' : '啟動開發儀式';
      ritualButton.classList.toggle('bg-emerald-500/20', isVisible);
      ritualButton.classList.toggle('text-emerald-200', isVisible);
    });

    infoTabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setInfoTab(button.dataset.tab);
        openInfoPage(button.dataset.tab);
      });
    });

    setInfoTab('author');


    infoPageClose?.addEventListener('click', () => {
      if (!infoPage) return;
      infoPage.classList.add('hidden');
      infoPage.classList.remove('open');
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && infoPage && !infoPage.classList.contains('hidden')) {
        infoPage.classList.add('hidden');
        infoPage.classList.remove('open');
      }
    });

    const closeModalButton = document.getElementById('close-add-site-modal');
    const addSiteModal = document.getElementById('add-site-modal');
    const addSiteForm = document.getElementById('add-site-form');
    const addSiteStatus = document.getElementById('add-site-status');

    const openModal = () => {
      addSiteModal?.classList.add('is-open');
      addSiteModal?.classList.remove('hidden');
      addSiteModal?.classList.add('flex');
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
