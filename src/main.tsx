import './index.css';
// @ts-ignore
import avatarPath from './assets/images/profile_tech_orb_1779691659860.png';

// Setup basic viewport loader
document.addEventListener('DOMContentLoaded', () => {
  // 1. Assign the imported 3D avatar path to the DOM container
  const avatarImg = document.getElementById('avatarImg') as HTMLImageElement;
  if (avatarImg) {
    avatarImg.src = avatarPath;
  }

  // 2. 3D Glass Card Tilt Effect Physics
  function apply3DTilt(elementId: string) {
    const card = document.getElementById(elementId);
    if (!card) return;

    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse x inside card
      const y = e.clientY - rect.top;  // mouse y inside card
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Rotates up to 12 degrees
      const rotateX = -(y - centerY) / 12;
      const rotateY = (x - centerX) / 12;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty('--x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--y', `${(y / rect.height) * 100}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.setProperty('--x', '50%');
      card.style.setProperty('--y', '50%');
    });
  }

  // Hook tilt physics to key bento widgets
  apply3DTilt('avatarCard');
  apply3DTilt('contactCard');
  apply3DTilt('calculator');
  apply3DTilt('contact');

  // 3. Contact Clipboards (Copy to clipboard metrics)
  const copyButtons = document.querySelectorAll('.btn-copy');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const copyVal = btn.getAttribute('data-copy');
      if (copyVal) {
        navigator.clipboard.writeText(copyVal).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = '✓ 복사됨';
          btn.classList.add('bg-blue-500/10', 'text-blue-400');
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('bg-blue-500/10', 'text-blue-400');
          }, 1800);
        });
      }
    });
  });

  // 4. Interactive Core Automation Skills Simulation
  const skillCards = document.querySelectorAll('.skill-card');
  const simNode1 = document.getElementById('simNode1');
  const simNode2 = document.getElementById('simNode2');
  const simNode3 = document.getElementById('simNode3');
  const simFeedback = document.getElementById('simFeedback');

  skillCards.forEach((card) => {
    card.addEventListener('click', () => {
      // Remove active borders from all
      skillCards.forEach(c => c.classList.remove('border-blue-400/30', 'border-indigo-500/30', 'border-blue-300/30'));
      
      const skillType = card.getAttribute('data-skill');
      
      if (skillType === 'notion') {
        card.classList.add('border-blue-400/30');
        if (simNode1 && simNode2 && simNode3 && simFeedback) {
          simNode1.textContent = 'Notion API DB';
          simNode2.textContent = 'Relational Linker';
          simNode3.textContent = 'Slack/Mail Feed';
          simFeedback.textContent = '⚡ NOTION CRM DUPLEX SYNC ACTIVATED Successfully';
          simFeedback.className = 'text-blue-400 animate-pulse font-semibold';
        }
      } else if (skillType === 'integration') {
        card.classList.add('border-indigo-500/30');
        if (simNode1 && simNode2 && simNode3 && simFeedback) {
          simNode1.textContent = 'Webhook Payload';
          simNode2.textContent = 'Zap/Make Splitter';
          simNode3.textContent = 'CRM + G-Workspace';
          simFeedback.textContent = '⚡ MULTICAST INTEGRATION ROUTING PIPELINE SECURED';
          simFeedback.className = 'text-indigo-400 animate-pulse font-semibold';
        }
      } else if (skillType === 'workflow') {
        card.classList.add('border-blue-300/30');
        if (simNode1 && simNode2 && simNode3 && simFeedback) {
          simNode1.textContent = 'Legacy Inbound';
          simNode2.textContent = 'Bypass Engine';
          simNode3.textContent = 'Minimized Flow';
          simFeedback.textContent = '⚡ BUSINESS PROCESS HOURLY BOTTLENECK REDUCED BY 35%';
          simFeedback.className = 'text-blue-300 animate-pulse font-semibold';
        }
      }
    });
  });

  // 5. Cost & Hour Resource Return Calculator
  const sliderTeam = document.getElementById('sliderTeam') as HTMLInputElement;
  const sliderHours = document.getElementById('sliderHours') as HTMLInputElement;
  const valTeam = document.getElementById('valTeam');
  const valHours = document.getElementById('valHours');
  const savingHours = document.getElementById('savingHours');
  const savingMoney = document.getElementById('savingMoney');

  function updateVisualROI() {
    if (!sliderTeam || !sliderHours || !valTeam || !valHours || !savingHours || !savingMoney) return;

    const team = parseInt(sliderTeam.value);
    const hrs = parseInt(sliderHours.value);

    valTeam.textContent = `${team} 명`;
    valHours.textContent = `${hrs} h / 주`;

    // Calculate return hours monthly: Team * hrs * 75% efficiency * 4.3 weeks/month
    const monthlyHrs = team * hrs * 0.75 * 4.3;
    // Saved money = saved hours * average corporate labor wage index (35,000 KRW/hr)
    const monthlyMoney = monthlyHrs * 35000;

    savingHours.innerHTML = `${monthlyHrs.toFixed(1)} <span class="text-xs font-normal text-slate-400">Hours / Month</span>`;
    savingMoney.innerHTML = `${Math.round(monthlyMoney).toLocaleString()} <span class="text-xs font-normal text-slate-400">₩ / Month</span>`;
  }

  if (sliderTeam && sliderHours) {
    sliderTeam.addEventListener('input', updateVisualROI);
    sliderHours.addEventListener('input', updateVisualROI);
    updateVisualROI(); // Initialize
  }

  // 6. Project Consultation Simulation (Form submission webhook visualization)
  const consultForm = document.getElementById('consultForm') as HTMLFormElement;
  const formOverlay = document.getElementById('formOverlay');
  const overlayLogs = document.getElementById('overlayLogs');
  const overlayHeader = document.getElementById('overlayHeader');
  const btnDismissOverlay = document.getElementById('btnDismissOverlay');
  const overlayIcon = document.getElementById('overlayIcon');

  if (consultForm && formOverlay && overlayLogs && overlayHeader && btnDismissOverlay && overlayIcon) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Gather form inputs for simulation logging
      const nameInput = (document.getElementById('formName') as HTMLInputElement).value;
      const companyInput = (document.getElementById('formCompany') as HTMLInputElement).value || '개인 의뢰';
      const typeInput = (document.getElementById('formType') as HTMLSelectElement).value;

      // Bring up overlay
      formOverlay.classList.remove('opacity-0', 'pointer-events-none');
      formOverlay.classList.add('opacity-100', 'pointer-events-auto');

      // Reset values
      overlayHeader.textContent = '자동화 시스템 배포 진행 중...';
      btnDismissOverlay.classList.add('hidden');
      
      const logs = [
        `[SYSTEM] Connecting to server-side webhook router for ${nameInput}...`,
        `[SYSTEM] Payload incoming from corporate: "${companyInput}"`,
        `[PROCESSOR] Sanitizing specific field definitions...`,
        `[ZAPIER] Preparing authorization headers & SSL tokens...`,
        `[MAKE.COM] Creating dynamic branch context for sector: "${typeInput.toUpperCase()}"`,
        `[NOTION] Inserting database row coordinates for CRM registry...`,
        `[SLACK] Broadcast node firing outbound notification to Jeon Sijin's Agent...`,
        `[SERVER] Webhook completed cleanly. Code 200 OK via pipeline.`
      ];

      overlayLogs.innerHTML = '';
      let logIndex = 0;

      function triggerLogPrint() {
        if (logIndex < logs.length) {
          const logLine = document.createElement('div');
          logLine.className = 'font-mono-custom text-[10px] text-slate-300 mb-1';
          logLine.textContent = logs[logIndex];
          overlayLogs.appendChild(logLine);
          // Auto scroll to bottom
          overlayLogs.scrollTop = overlayLogs.scrollHeight;
          logIndex++;
          setTimeout(triggerLogPrint, 450);
        } else {
          // Success state triggered
          overlayHeader.textContent = '자동화 파이프라인 배포 성공!';
          
          // Switch to complete checkmark
          overlayIcon.innerHTML = `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
          overlayIcon.className = 'glass-pill p-4 text-emerald-400 rounded-full mb-4 animate-pulse';
          
          const successAlert = document.createElement('div');
          successAlert.className = 'font-sans-custom text-xs text-emerald-400 mt-2 font-semibold bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-400/20';
          successAlert.textContent = `${nameInput}님의 자동화 의뢰 내용이 전시진 컨설턴트 봇에 성공적으로 로그되었습니다!`;
          overlayLogs.appendChild(successAlert);
          overlayLogs.scrollTop = overlayLogs.scrollHeight;

          btnDismissOverlay.classList.remove('hidden');
        }
      }

      setTimeout(triggerLogPrint, 300);
    });

    btnDismissOverlay.addEventListener('click', () => {
      formOverlay.classList.add('opacity-0', 'pointer-events-none');
      formOverlay.classList.remove('opacity-100', 'pointer-events-auto');
      consultForm.reset();
      
      // Reset icon back to rocket
      overlayIcon.innerHTML = `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`;
      overlayIcon.className = 'glass-pill p-4 text-blue-400 rounded-full mb-4 animate-bounce';
    });
  }
});
