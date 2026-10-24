/**
 * CardWise AI - Interactive Marketing Application
 * Lightweight, zero-dependency, mobile-first scripts
 */

// Demo dataset for interactive Hero live preview
const PRESET_QUERIES = {
  amazon: {
    query: "Which of my cards gives me the best rewards on Amazon?",
    merchant: "Amazon.in",
    amount: "₹25,000",
    category: "Online Electronics / Retail",
    cards: [
      {
        name: "Amazon Pay ICICI Card",
        bank: "ICICI",
        rank: 1,
        isBest: true,
        tag: "Best Pick",
        rewardValue: "₹1,250",
        rewardRate: "5% Direct Cashback",
        condition: "Credited directly to Amazon Pay balance • Zero monthly cap",
        type: "Cashback"
      },
      {
        name: "SBI Cashback Card",
        bank: "SBI",
        rank: 2,
        isBest: false,
        tag: "High Yield",
        rewardValue: "₹1,250",
        rewardRate: "5% Statement Credit",
        condition: "Subject to ₹5,000 monthly cashback ceiling",
        type: "Cashback"
      },
      {
        name: "HDFC Regalia Gold",
        bank: "HDFC",
        rank: 3,
        isBest: false,
        tag: "Points",
        rewardValue: "₹333",
        rewardRate: "4 RP / ₹150 (1.33%)",
        condition: "Redeemable at 1 RP = ₹0.50 for flights on SmartBuy",
        type: "Reward Points"
      }
    ]
  },
  makemytrip: {
    query: "Flying to Delhi on MakeMyTrip for ₹14,000. Best card?",
    merchant: "MakeMyTrip Flights",
    amount: "₹14,000",
    category: "Travel & Flights",
    cards: [
      {
        name: "HDFC Infinia Card",
        bank: "HDFC",
        rank: 1,
        isBest: true,
        tag: "Best Pick",
        rewardValue: "₹2,331",
        rewardRate: "5x SmartBuy (16.65%)",
        condition: "Via SmartBuy portal booking • 1 RP = ₹1.00 on flight redemptions",
        type: "Accelerated Points"
      },
      {
        name: "Axis Atlas Card",
        bank: "Axis",
        rank: 2,
        isBest: false,
        tag: "Tier 1 Air Miles",
        rewardValue: "₹1,400",
        rewardRate: "5 EDGE Miles / ₹100 (10%)",
        condition: "Direct airline / OTA booking • 1 EDGE Mile = 2 Partner Miles",
        type: "Miles"
      },
      {
        name: "Amex Platinum Travel",
        bank: "Amex",
        rank: 3,
        isBest: false,
        tag: "Milestone Booster",
        rewardValue: "₹420",
        rewardRate: "Base + Milestone Push",
        condition: "Counts directly toward ₹1.90L annual milestone (₹7,500 Taj voucher)",
        type: "Milestone"
      }
    ]
  },
  swiggy: {
    query: "Ordering dinner on Swiggy for ₹1,800. What gives max savings?",
    merchant: "Swiggy Food Delivery",
    amount: "₹1,800",
    category: "Dining & Delivery",
    cards: [
      {
        name: "HDFC Swiggy Card",
        bank: "HDFC",
        rank: 1,
        isBest: true,
        tag: "Best Pick",
        rewardValue: "₹180",
        rewardRate: "10% Instant Cashback",
        condition: "Direct in-app deduction on Swiggy • Capped at ₹1,500/mo",
        type: "Cashback"
      },
      {
        name: "Airtel Axis Bank Card",
        bank: "Axis",
        rank: 2,
        isBest: false,
        tag: "Dining Yield",
        rewardValue: "₹180",
        rewardRate: "10% Statement Credit",
        condition: "Valid on Swiggy & Zomato • Capped at ₹500/billing cycle",
        type: "Cashback"
      },
      {
        name: "Amazon Pay ICICI Card",
        bank: "ICICI",
        rank: 3,
        isBest: false,
        tag: "Base Rate",
        rewardValue: "₹18",
        rewardRate: "1% Unlimited Cashback",
        condition: "Standard non-merchant spend rate • No minimum transaction",
        type: "Cashback"
      }
    ]
  }
};

// Available Indian credit cards for onboarding portfolio simulation
const AVAILABLE_CARDS = [
  { id: 'hdfc-millennia', name: 'HDFC Millennia', bank: 'HDFC', type: 'Cashback', defaultSelected: true },
  { id: 'icici-amazon', name: 'Amazon Pay ICICI', bank: 'ICICI', type: 'Cashback', defaultSelected: true },
  { id: 'sbi-cashback', name: 'SBI Cashback Card', bank: 'SBI', type: 'Cashback', defaultSelected: false },
  { id: 'axis-airtel', name: 'Airtel Axis Bank Card', bank: 'Axis', type: 'Utility & Food', defaultSelected: true },
  { id: 'hdfc-infinia', name: 'HDFC Infinia Metal', bank: 'HDFC', type: 'Super Premium', defaultSelected: false },
  { id: 'axis-atlas', name: 'Axis Atlas Credit Card', bank: 'Axis', type: 'Travel & Miles', defaultSelected: false },
  { id: 'amex-plat-travel', name: 'Amex Platinum Travel', bank: 'American Express', type: 'Milestone', defaultSelected: false },
  { id: 'tata-neu-infinity', name: 'Tata Neu Infinity HDFC', bank: 'HDFC', type: 'UPI & NeuCoins', defaultSelected: false }
];

const USER_STORAGE_KEY = 'cardwise_active_user';

function getActiveUser() {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.name) {
        if (!Array.isArray(parsed.cards) || parsed.cards.length === 0) {
          parsed.cards = ['HDFC Millennia', 'Amazon Pay ICICI', 'SBI Cashback Card'];
        }
        return parsed;
      }
    }
  } catch (e) {}
  return {
    name: 'Vikram Malhotra',
    email: 'vikram@cardwise.in',
    cards: ['HDFC Millennia', 'Amazon Pay ICICI', 'SBI Cashback Card'],
    loggedIn: false
  };
}

function setActiveUser(user) {
  if (!user) {
    localStorage.removeItem(USER_STORAGE_KEY);
  } else {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  }
  applyUserToUI(user || { name: 'Vikram Malhotra', email: 'vikram@cardwise.in', cards: ['HDFC Millennia', 'Amazon Pay ICICI', 'SBI Cashback Card'], loggedIn: false });
}

function applyUserToUI(user) {
  const isAuth = !!(user && user.loggedIn);
  const name = user && user.name ? user.name : 'Vikram Malhotra';
  const email = user && user.email ? user.email : 'vikram@cardwise.in';
  const initial = (name.trim()[0] || 'V').toUpperCase();
  const userCards = (user && Array.isArray(user.cards) && user.cards.length > 0)
    ? user.cards
    : ['HDFC Millennia', 'Amazon Pay ICICI', 'SBI Cashback Card'];

  document.querySelectorAll('.user-name-display').forEach(el => {
    el.textContent = name;
  });

  document.querySelectorAll('.user-email-display').forEach(el => {
    el.textContent = email;
  });

  document.querySelectorAll('.user-avatar').forEach(el => {
    el.textContent = initial;
  });

  const cardsList = document.getElementById('user-active-cards-list');
  if (cardsList) {
    cardsList.innerHTML = userCards.map(card => `<span class="portfolio-tag">${card}</span>`).join('');
  }

  const signInButtons = document.querySelectorAll('[data-route="login"], [data-route="signup"]');
  signInButtons.forEach(btn => {
    const show = !isAuth;
    btn.style.display = show ? '' : 'none';
  });

  const signedInControls = document.querySelectorAll('[data-route="app"], [data-route="circle"], #btn-signout, #mobile-signout-btn');
  signedInControls.forEach(el => {
    if (el.id === 'mobile-signout-btn' || el.id === 'btn-signout') {
      el.style.display = isAuth ? '' : 'none';
    } else {
      el.style.display = isAuth ? '' : 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroPreview();
  initFAQAccordion();
  initMobileNavigation();
  initRoutingAndModals();
});

/**
 * 1. Hero Live Product Preview Logic
 */
function initHeroPreview() {
  const queryInput = document.getElementById('hero-sample-query');
  const presetChips = document.querySelectorAll('.preset-chip');
  const comparisonContainer = document.getElementById('comparison-results-list');

  if (!queryInput || !comparisonContainer) return;

  function renderQueryData(key) {
    const data = PRESET_QUERIES[key] || PRESET_QUERIES.amazon;
    queryInput.value = data.query;

    // Render cards
    let html = '';
    data.cards.forEach((card) => {
      html += `
        <div class="comparison-card ${card.isBest ? 'best-pick' : ''}">
          <div class="comparison-top">
            <div class="card-badge-row">
              <span class="card-logo-mini">${card.bank}</span>
              <span class="card-name">${card.name}</span>
              ${card.isBest ? `<span class="tag-best">${card.tag}</span>` : ''}
            </div>
            <div class="reward-highlight">
              <div class="reward-value tabular-nums">${card.rewardValue}</div>
              <div class="reward-rate">${card.rewardRate}</div>
            </div>
          </div>
          <div class="comparison-bottom">
            <div class="condition-note">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>${card.condition}</span>
            </div>
            <span class="body-sm" style="font-size: 0.6875rem; color: var(--color-sage); font-weight: 500;">
              Demo result
            </span>
          </div>
        </div>
      `;
    });

    comparisonContainer.innerHTML = html;
  }

  presetChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      presetChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const key = chip.getAttribute('data-preset');
      renderQueryData(key);
    });
  });

  // Handle enter in query input
  queryInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      showToast(`Analyzing cards for: "${queryInput.value.slice(0, 30)}..."`);
    }
  });

  // Initial render
  renderQueryData('amazon');
}

/**
 * 2. FAQ Accordion Logic
 */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      // Close other accordion items for clean presentation
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const btn = otherItem.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * 3. Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');

  if (!toggleBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    } else {
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
    }
  }

  toggleBtn.addEventListener('click', toggleMenu);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    });
  });

  // Close with Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu();
    }
  });
}

/**
 * 4. Routing, Authentication & Modal Handlers
 */
function initRoutingAndModals() {
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  const circleModal = document.getElementById('circle-modal');
  const appModal = document.getElementById('app-modal');

  const closeButtons = document.querySelectorAll('[data-close-modal]');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
      updateUrlRoute('/');
    });
  });

  // Global click outside to dismiss
  [loginModal, signupModal, circleModal, appModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
        updateUrlRoute('/');
      }
    });
  });

  // Handle CTA buttons for login & signup
  document.querySelectorAll('[data-route="login"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(loginModal);
      updateUrlRoute('/login');
    });
  });

  document.querySelectorAll('[data-route="signup"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(signupModal);
      renderSignupCards();
      updateUrlRoute('/signup');
    });
  });

  document.querySelectorAll('[data-route="circle"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(circleModal);
      updateUrlRoute('/circle');
    });
  });

  document.querySelectorAll('[data-route="app"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(appModal);
      updateUrlRoute('/app');
    });
  });

  // Listen to browser popstate (back/forward)
  window.addEventListener('popstate', handleLocationRoute);
  
  // Check initial route
  handleLocationRoute();

  // Populate interactive cards in signup onboarding
  function renderSignupCards() {
    const container = document.getElementById('onboarding-card-picker');
    if (!container || container.children.length > 0) return;

    let html = '';
    AVAILABLE_CARDS.forEach(card => {
      html += `
        <div class="card-select-item ${card.defaultSelected ? 'selected' : ''}" data-card-id="${card.id}">
          <div style="display:flex; align-items:center; gap: 10px;">
            <span class="card-logo-mini">${card.bank}</span>
            <div>
              <div style="font-size: 0.875rem; font-weight: 600; color: var(--color-charcoal);">${card.name}</div>
              <div style="font-size: 0.75rem; color: var(--color-charcoal-light);">${card.type}</div>
            </div>
          </div>
          <div class="check-indicator">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;

    container.querySelectorAll('.card-select-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('selected');
      });
    });
  }

  // Apply user details to the UI
  function applyUserToUI(user) {
    const isAuth = !!(user && user.loggedIn);
    const name = user && user.name ? user.name : 'Vikram Malhotra';
    const email = user && user.email ? user.email : 'vikram@cardwise.in';
    const initial = (name.trim()[0] || 'V').toUpperCase();
    const userCards = (user && Array.isArray(user.cards) && user.cards.length > 0)
      ? user.cards
      : ['HDFC Millennia', 'Amazon Pay ICICI', 'SBI Cashback Card'];

    document.querySelectorAll('.user-name-display').forEach(el => {
      el.textContent = name;
    });

    document.querySelectorAll('.user-email-display').forEach(el => {
      el.textContent = email;
    });

    document.querySelectorAll('.user-initial-display').forEach(el => {
      el.textContent = initial;
    });

    const activeCardsList = document.getElementById('user-active-cards-list');
    if (activeCardsList) {
      activeCardsList.innerHTML = userCards.map(c => `<span class="portfolio-tag">${c}</span>`).join(' ');
    }

    const pickerItems = document.querySelectorAll('#onboarding-card-picker .card-select-item');
    if (pickerItems.length > 0) {
      pickerItems.forEach(item => {
        const cardId = item.getAttribute('data-card-id');
        const found = AVAILABLE_CARDS.find(c => c.id === cardId);
        if (found) {
          if (userCards.includes(found.name)) {
            item.classList.add('selected');
          } else {
            item.classList.remove('selected');
          }
        }
      });
    }

    const unauthNav = document.getElementById('nav-unauth-actions');
    const authNav = document.getElementById('nav-auth-actions');
    if (unauthNav && authNav) {
      unauthNav.style.display = isAuth ? 'none' : 'flex';
      authNav.style.display = isAuth ? 'flex' : 'none';
    }

    const mobileUnauth = document.getElementById('mobile-unauth-actions');
    const mobileAuth = document.getElementById('mobile-auth-actions');
    if (mobileUnauth && mobileAuth) {
      mobileUnauth.style.display = isAuth ? 'none' : 'flex';
      mobileAuth.style.display = isAuth ? 'flex' : 'none';
    }

    const loginNameInput = document.getElementById('login-name');
    const loginEmailInput = document.getElementById('login-email');
    if (loginNameInput && (!loginNameInput.value || loginNameInput.value === 'Vikram Malhotra')) {
      loginNameInput.value = name;
    }
    if (loginEmailInput && (!loginEmailInput.value || loginEmailInput.value === 'vikram@cardwise.in')) {
      loginEmailInput.value = email;
    }
  }

  // Handle Signup Form Submit
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('signup-name');
      const emailInput = document.getElementById('signup-email');
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Priya Patel';
      const email = emailInput && emailInput.value.trim() ? emailInput.value.trim() : 'priya@cardwise.in';

      // Gather exactly what cards the user selected during registration
      const selectedCards = [];
      const selectedElements = document.querySelectorAll('#onboarding-card-picker .card-select-item.selected');
      selectedElements.forEach(item => {
        const cardId = item.getAttribute('data-card-id');
        const found = AVAILABLE_CARDS.find(c => c.id === cardId);
        if (found) {
          selectedCards.push(found.name);
        }
      });

      const cards = selectedCards.length > 0 
        ? selectedCards 
        : ['HDFC Millennia', 'Amazon Pay ICICI', 'SBI Cashback Card'];

      setActiveUser({ name, email, cards, loggedIn: true });
      closeAllModals();
      showToast(`Welcome to CardWise, ${name}! Your active portfolio (${cards.length} cards) is ready.`);
      openModal(appModal);
      updateUrlRoute('/app');
    });
  }

  // Handle Login Form Submit
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('login-name');
      const emailInput = document.getElementById('login-email');
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Vikram Malhotra';
      const email = emailInput && emailInput.value.trim() ? emailInput.value.trim() : 'vikram@cardwise.in';

      const existingUser = getActiveUser();
      const cards = (existingUser && Array.isArray(existingUser.cards) && existingUser.cards.length > 0)
        ? existingUser.cards
        : ['HDFC Millennia', 'Amazon Pay ICICI', 'SBI Cashback Card'];

      setActiveUser({ name, email, cards, loggedIn: true });
      closeAllModals();
      showToast(`Signed in successfully as ${name}.`);
      openModal(appModal);
      updateUrlRoute('/app');
    });
  }

  // Handle Sign out buttons
  const signoutBtn = document.getElementById('btn-signout');
  if (signoutBtn) {
    signoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveUser(null);
      showToast('Signed out successfully.');
      closeAllModals();
      updateUrlRoute('/');
    });
  }

  const mobileSignoutBtn = document.getElementById('mobile-signout-btn');
  if (mobileSignoutBtn) {
    mobileSignoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveUser(null);
      showToast('Signed out successfully.');
      closeAllModals();
      updateUrlRoute('/');
    });
  }

  // Keyboard Escape listener to close full-screen window
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      updateUrlRoute('/');
    }
  });

  // Apply initial user state on load
  applyUserToUI(getActiveUser());

  // Handle App Question within Modal with live AI Agent connection
  const appQuestionForm = document.getElementById('app-query-form');
  if (appQuestionForm) {
    appQuestionForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      await runAgentCalculation();
    });
  }

  // Handle AgenticOrg settings panel toggle & persistence
  initAgenticOrgSettings();
}

/**
 * 5. AgenticOrg AI Integration & Calculator
 */
function initAgenticOrgSettings() {
  const badge = document.getElementById('agentic-connection-badge');

  // Query server-side status directly from backend .env
  fetch('/api/agent/config')
    .then(r => r.json())
    .then(cfg => {
      if (badge) {
        if (cfg.configured) {
          badge.className = 'agentic-status-indicator connected';
          badge.innerHTML = '● Connected (Pine Labs AgenticOrg Live Bot)';
        } else {
          badge.className = 'agentic-status-indicator ready';
          badge.innerHTML = '● Ready (Deterministic Engine)';
        }
      }
    })
    .catch(() => {
      if (badge) {
        badge.className = 'agentic-status-indicator ready';
        badge.innerHTML = '● Ready';
      }
    });

  // Keep query and amount synchronized to avoid discrepancies
  const queryInput = document.getElementById('app-query-input');
  const amountInput = document.getElementById('agent-amount');
  
  if (queryInput && amountInput) {
    queryInput.addEventListener('input', () => {
      const match = queryInput.value.match(/₹\s?([\d,]+)/);
      if (match) {
        amountInput.value = match[1].replace(/,/g, '');
      }
    });
    amountInput.addEventListener('input', () => {
      const amt = amountInput.value.trim();
      if (amt && queryInput.value.includes('₹')) {
        queryInput.value = queryInput.value.replace(/₹\s?[\d,]+/, `₹${parseInt(amt).toLocaleString('en-IN')}`);
      }
    });
  }
}

// Global scenario filler for quick testing
window.fillAgentScenario = function(scenarioKey) {
  const merchantInput = document.getElementById('agent-merchant');
  const amountInput = document.getElementById('agent-amount');
  const queryInput = document.getElementById('app-query-input');

  if (scenarioKey === 'amazon-iphone') {
    if (merchantInput) merchantInput.value = 'Amazon.in';
    if (amountInput) amountInput.value = '80000';
    if (queryInput) queryInput.value = 'Buying an iPhone for ₹80,000 on Amazon. ICICI has a 10% instant discount up to ₹1,500. Which card should I use?';
  } else if (scenarioKey === 'makemytrip-flight') {
    if (merchantInput) merchantInput.value = 'MakeMyTrip';
    if (amountInput) amountInput.value = '25000';
    if (queryInput) queryInput.value = 'Flight ticket of ₹25,000 on MakeMyTrip for Delhi to Bangalore. Axis Atlas vs HDFC Infinia?';
  } else if (scenarioKey === 'swiggy-dining') {
    if (merchantInput) merchantInput.value = 'Swiggy';
    if (amountInput) amountInput.value = '2400';
    if (queryInput) queryInput.value = 'Weekend family food order for ₹2,400 on Swiggy. Which card gives highest cashback?';
  } else if (scenarioKey === 'rent-payment') {
    if (merchantInput) merchantInput.value = 'Cred / NoBroker';
    if (amountInput) amountInput.value = '45000';
    if (queryInput) queryInput.value = 'Paying ₹45,000 house rent on portal. Does SBI Cashback give 5%?';
  }
};

async function runAgentCalculation() {
  const calculateBtn = document.getElementById('btn-calculate');
  const calculateText = document.getElementById('btn-calculate-text');
  const outputContainer = document.getElementById('agent-output-container');
  const queryInput = document.getElementById('app-query-input');
  const merchantInput = document.getElementById('agent-merchant');
  const amountInput = document.getElementById('agent-amount');

  const query = queryInput ? queryInput.value.trim() : '';
  const merchant = merchantInput ? merchantInput.value.trim() : 'Amazon.in';
  const amount = amountInput ? amountInput.value.trim() : '80000';

  const user = getActiveUser();
  const userName = user && user.name ? user.name : 'Vikram Malhotra';
  const userEmail = user && user.email ? user.email : 'vikram@cardwise.in';
  const activeCards = (user && Array.isArray(user.cards) && user.cards.length > 0)
    ? user.cards
    : ['HDFC Millennia', 'Amazon Pay ICICI', 'SBI Cashback Card'];

  // UI Loading state
  if (calculateBtn) calculateBtn.disabled = true;
  if (calculateText) calculateText.textContent = 'Calculating with AgenticOrg AI...';

  try {
    const res = await fetch('/api/agent/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        merchant,
        amount,
        userCards: activeCards,
        userName,
        userEmail
      })
    });

    const data = await res.json();
    const opt = data.data || {};

    // Render output right on screen
    if (outputContainer) {
      outputContainer.style.display = 'block';

      const statusTag = document.getElementById('agent-status-tag');
      const bestCardName = document.getElementById('agent-best-card-name');
      const savingsVal = document.getElementById('agent-savings-val');
      const yieldPct = document.getElementById('agent-yield-pct');
      const summaryText = document.getElementById('agent-summary-text');
      const tableBody = document.getElementById('agent-table-body');
      const caveatsList = document.getElementById('agent-caveats-list');

      if (statusTag) {
        if (data.source === 'agentic_org_live') {
          statusTag.textContent = `● Live Agent (${data.status || 'Completed'})`;
        } else if (data.source === 'agentic_org_assisted') {
          statusTag.textContent = `● AgenticOrg Engine (Verified)`;
        } else {
          statusTag.textContent = '● CardWise Optimization Engine';
        }
      }

      if (bestCardName) bestCardName.textContent = opt.bestCard || 'Optimal Card Evaluated';
      if (savingsVal) savingsVal.textContent = opt.netSavings || 'Optimal Return';
      if (yieldPct) yieldPct.textContent = opt.yieldPercentage ? `${opt.yieldPercentage} Effective Yield` : 'Estimated Net Benefit';
      if (summaryText) summaryText.textContent = opt.summary || `Evaluated for ${merchant} purchase of ₹${amount}.`;

      // Render clean, professional comparison table
      if (tableBody) {
        let rowsHtml = '';
        if (opt.breakdown && opt.breakdown.length > 0) {
          opt.breakdown.forEach((item, index) => {
            const isTop = index === 0 || item.isBest;
            const caveatText = item.caveat || item.type || 'Standard issuer conditions apply';
            rowsHtml += `
              <tr style="${isTop ? 'background-color: rgba(26, 56, 43, 0.04);' : ''}">
                <td style="padding: 12px 10px; vertical-align: top;">
                  <div style="font-weight: 700; color: var(--color-charcoal); font-size: 0.875rem;">${item.card}</div>
                  ${isTop ? '<span class="tag-best" style="margin-top: 4px; display: inline-block;">Optimal Pick</span>' : ''}
                </td>
                <td class="tabular-nums" style="padding: 12px 10px; color: var(--color-forest-prime); font-weight: 700; font-size: 0.875rem; vertical-align: top;">
                  ${item.return}
                </td>
                <td style="padding: 12px 10px; color: var(--color-charcoal-muted); font-size: 0.8125rem; line-height: 1.5; vertical-align: top;">
                  ${caveatText}
                </td>
              </tr>
            `;
          });
        } else {
          rowsHtml = `<tr><td colspan="3" style="padding:14px; text-align:center;">Optimization analysis complete.</td></tr>`;
        }
        tableBody.innerHTML = rowsHtml;
      }

      // Render clean, professional caveats list
      if (caveatsList) {
        let caveatsHtml = '';
        const items = (opt.caveats && opt.caveats.length > 0) ? opt.caveats : [
          'Verify if the instant bank discount applies to co-branded cards or primary issuer credit cards only.',
          'Monthly cashback caps apply according to your specific card billing cycle.',
          'Transactions on rent, fuel, and wallet reloads carry exclusions or fees across major cards.'
        ];

        items.forEach(c => {
          caveatsHtml += `
            <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.8125rem; color: var(--color-charcoal-muted); line-height: 1.5;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--color-forest-prime); flex-shrink: 0; margin-top: 3px;">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${c}</span>
            </li>
          `;
        });
        caveatsList.innerHTML = caveatsHtml;
      }

      // Smoothly bring output into view
      outputContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    showToast('Optimization calculated successfully!');
  } catch (err) {
    console.error('Calculation error:', err);
    showToast('Failed to calculate optimal card. Please try again.');
  } finally {
    if (calculateBtn) calculateBtn.disabled = false;
    if (calculateText) calculateText.textContent = 'Calculate Best Card';
  }
}


function handleLocationRoute() {
  const path = window.location.pathname;
  const hash = window.location.hash;

  if (path === '/login' || hash === '#login') {
    closeAllModals();
    openModal(document.getElementById('login-modal'));
  } else if (path === '/signup' || hash === '#signup') {
    closeAllModals();
    openModal(document.getElementById('signup-modal'));
  } else if (path === '/circle' || hash === '#circle-hub') {
    closeAllModals();
    openModal(document.getElementById('circle-modal'));
  } else if (path === '/app' || hash === '#app') {
    closeAllModals();
    openModal(document.getElementById('app-modal'));
  } else {
    closeAllModals();
  }
}

function updateUrlRoute(route) {
  if (window.history && window.history.pushState) {
    window.history.pushState({}, '', route);
  }
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');
  if (mainEl) mainEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'none';
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');
  if (mainEl) mainEl.style.display = '';
  if (footerEl) footerEl.style.display = '';
}

/**
 * Toast Notice Utility
 */
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
