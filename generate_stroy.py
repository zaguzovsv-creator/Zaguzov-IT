import subprocess

svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080b11" />
      <stop offset="50%" stop-color="#0a0d14" />
      <stop offset="100%" stop-color="#06080d" />
    </linearGradient>

    <radialGradient id="red-ambient" cx="0.85" cy="0.7" r="0.5">
      <stop offset="0%" stop-color="#881337" stop-opacity="0.18" />
      <stop offset="60%" stop-color="#450a0a" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <linearGradient id="card-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#121824" />
      <stop offset="100%" stop-color="#0f141f" />
    </linearGradient>

    <linearGradient id="btn-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9f1239" />
      <stop offset="100%" stop-color="#7e122e" />
    </linearGradient>

    <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="20" stdDeviation="25" flood-color="#000000" flood-opacity="0.6"/>
    </filter>

    <filter id="input-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#f87171" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1920" height="1080" fill="url(#bg-grad)" />
  <rect width="1920" height="1080" fill="url(#red-ambient)" />

  <!-- Center Card -->
  <rect x="680" y="150" width="560" height="780" rx="32" fill="url(#card-grad)" stroke="#1e293b" stroke-width="1.5" filter="url(#card-shadow)" />

  <!-- Top App Icon (Excavator / Heavy Equipment) -->
  <g transform="translate(924, 200)">
    <rect x="0" y="0" width="72" height="72" rx="18" fill="#1c1315" stroke="#f87171" stroke-width="1.5" />
    
    <!-- Excavator Graphic -->
    <!-- Tracks -->
    <rect x="18" y="48" width="36" height="10" rx="3" fill="#262626" stroke="#f97316" stroke-width="1" />
    <!-- Cab -->
    <rect x="22" y="32" width="16" height="16" rx="2" fill="#ea580c" />
    <rect x="25" y="35" width="8" height="7" fill="#38bdf8" opacity="0.8" />
    <!-- Arm / Boom -->
    <path d="M 36 38 L 48 24 L 54 36 L 50 42" fill="none" stroke="#f97316" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Bucket -->
    <path d="M 54 36 L 58 42 L 52 45 Z" fill="#ea580c" />
  </g>

  <!-- Title & Subtitle -->
  <text x="960" y="325" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="900" letter-spacing="0.5">
    <tspan fill="#f87171">STROY</tspan><tspan fill="#FFFFFF">TECHNOLOGY</tspan>
  </text>
  <text x="960" y="355" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" fill="#94a3b8" font-weight="400">
    Авторизация в сервисе по номеру телефона
  </text>

  <!-- Info Notice Box -->
  <g transform="translate(720, 395)">
    <rect x="0" y="0" width="480" height="115" rx="16" fill="#182030" stroke="#26334d" stroke-width="1.5" />
    
    <!-- Shield Icon -->
    <g transform="translate(20, 20)">
      <path d="M 10 2 L 18 5 V 11 C 18 16 10 20 10 20 C 10 20 2 16 2 11 V 5 Z" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 7 10 L 9 12 L 13 8" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </g>

    <text x="50" y="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="700" fill="#f87171" letter-spacing="0.5">
      БЕЗОПАСНЫЙ ВХОД (SMS.RU)
    </text>

    <text x="20" y="66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13.5" fill="#94a3b8" font-weight="400">
      <tspan x="20" dy="0">Введите номер телефона. Для авторизации нужно сделать 1</tspan>
      <tspan x="20" dy="22">бесплатный сброшенный звонок на указанный номер.</tspan>
    </text>
  </g>

  <!-- Phone Input Field -->
  <g transform="translate(720, 545)">
    <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="500" fill="#e2e8f0">
      Номер мобильного телефона
    </text>

    <!-- Input Box with Red Glow Border -->
    <rect x="0" y="14" width="480" height="58" rx="14" fill="#0b0f19" stroke="#f87171" stroke-width="2" filter="url(#input-glow)" />

    <!-- Placeholder Text -->
    <text x="20" y="50" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="17" fill="#64748b" font-weight="400">
      +7 (9XX) XXX-XX-XX
    </text>

    <!-- Handset Icon on Right -->
    <g transform="translate(436, 32)">
      <path d="M 18 13.5 C 18 15 16 17 13.5 17 C 7 17 2 12 2 5.5 C 2 3 4 1 5.5 1 L 8 1 L 9.5 5 L 7.5 6.5 C 8.5 8.5 10.5 10.5 12.5 11.5 L 14 9.5 L 18 11 Z" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </g>
  </g>

  <!-- Submit Button -->
  <g transform="translate(720, 650)">
    <rect x="0" y="0" width="480" height="56" rx="14" fill="url(#btn-grad)" />
    
    <text x="220" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="17" font-weight="700" fill="#FFFFFF">
      Войти по звонку
    </text>

    <!-- Arrow Icon -->
    <path d="M 298 34 L 312 34 M 306 28 L 312 34 L 306 40" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- Footer Note -->
  <g transform="translate(960, 750)">
    <path d="M -140 2 L -134 0 V 5 C -134 8 -137 10 -140 11 C -143 10 -146 8 -146 5 V 0 Z" fill="none" stroke="#64748b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <text x="-124" y="10" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" fill="#64748b" font-weight="400">
      Сессия сохраняется на устройстве автоматически
    </text>
  </g>
</svg>'''

with open("stroy_tech.svg", "w") as f:
    f.write(svg_content)

print("StroyTech SVG created successfully.")
