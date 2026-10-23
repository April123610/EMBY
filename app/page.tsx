const SITE_CONFIG = {
  brand: "11Y 影音馆",
  domain: "11y.cc.cd",
  contactHref: "#contact",
  contactLabel: "联系客服",
  contactStatus: "发布前请配置微信、Telegram 或邮箱",
  trialDays: 2,
  plans: [
    { name: "月卡", price: "12", unit: "元 / 月", note: "轻量体验，随时续订", badge: "灵活" },
    { name: "季卡", price: "32", unit: "元 / 季", note: "约 10.7 元 / 月", badge: "更划算" },
    { name: "年卡", price: "120", unit: "元 / 年", note: "约 10 元 / 月", badge: "推荐", featured: true },
  ],
} as const;

const features = [
  { icon: "4K", title: "清晰画质", copy: "支持高清与原画播放，实际体验取决于片源、设备与网络环境。" },
  { icon: "▶", title: "多端畅享", copy: "兼容手机、平板、电脑与电视端，熟悉的内容随身继续看。" },
  { icon: "↻", title: "进度同步", copy: "同一账号同步观看记录，在不同设备间自然衔接。" },
  { icon: "24h", title: "轻松上手", copy: "从安装到连接只需几步，遇到问题可通过客服入口咨询。" },
] as const;

const steps = [
  { number: "01", title: "领取试用", copy: "联系客服并说明使用设备，申请 2 天免费试用。" },
  { number: "02", title: "安装客户端", copy: "在手机、电脑、平板或电视上安装 EMBY 兼容客户端。" },
  { number: "03", title: "添加服务", copy: "收到试用信息后，按客服提供的地址与账号完成连接。" },
  { number: "04", title: "开始观看", copy: "登录后选择内容即可播放，观看进度会随账号同步。" },
] as const;

const faqs = [
  { question: "试用需要付费吗？", answer: "不需要。新用户可申请 2 天免费试用，建议先确认网络、设备与画质体验，再选择套餐。" },
  { question: "可以在哪些设备上使用？", answer: "支持安装 EMBY 或兼容客户端的常见手机、平板、Windows / macOS 电脑与智能电视；具体兼容性请在开通前咨询。" },
  { question: "套餐是否自动续费？", answer: "页面所列套餐默认不代表自动续费。实际开通与续费规则请以客服确认的信息为准。" },
  { question: "为什么播放清晰度会变化？", answer: "清晰度与片源、线路、网络带宽和设备解码能力有关。建议先通过免费试用测试常用设备。" },
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#content">跳至主要内容</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label={SITE_CONFIG.brand + " 首页"}>
          <span className="brand-mark" aria-hidden="true">11Y</span>
          <span className="brand-name">{SITE_CONFIG.brand}</span>
        </a>
        <nav className="desktop-nav" aria-label="主要导航">
          <a href="#features">服务亮点</a>
          <a href="#pricing">会员套餐</a>
          <a href="#guide">使用教程</a>
          <a href="#faq">常见问题</a>
        </nav>
        <a className="nav-cta" href={SITE_CONFIG.contactHref}>{SITE_CONFIG.contactLabel}<Arrow /></a>
        <details className="mobile-menu">
          <summary aria-label="打开导航菜单"><span /><span /></summary>
          <nav aria-label="移动端导航">
            <a href="#features">服务亮点</a>
            <a href="#pricing">会员套餐</a>
            <a href="#guide">使用教程</a>
            <a href="#faq">常见问题</a>
            <a href="#contact">联系客服</a>
          </nav>
        </details>
      </header>

      <div id="content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" />兼容 EMBY · 私人影音服务</div>
            <h1 id="hero-title">今晚，<span>想看就看。</span></h1>
            <p className="hero-lead">一个账号连接常用设备，舒适享受清晰、连贯的私人影音体验。先试用，再决定。</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">免费试用 {SITE_CONFIG.trialDays} 天<Arrow /></a>
              <a className="button button-secondary" href="#pricing">查看套餐</a>
            </div>
            <div className="hero-proof" aria-label="服务摘要">
              <span>手机 · 平板 · 电脑 · 电视</span><span className="proof-separator" aria-hidden="true" /><span>进度跨端同步</span>
            </div>
          </div>

          <div className="cinema-console" aria-label="影音库界面示意图">
            <div className="console-topbar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span>11Y LIBRARY</span><span className="status-pill">在线</span>
            </div>
            <div className="console-feature">
              <div className="play-button" aria-hidden="true">▶</div>
              <div><span className="console-kicker">继续观看</span><strong>属于你的放映时刻</strong><small>高清画质 · 多端同步</small></div>
            </div>
            <div className="poster-row" aria-hidden="true">
              <div className="poster poster-one"><span>电影</span></div>
              <div className="poster poster-two"><span>剧集</span></div>
              <div className="poster poster-three"><span>动画</span></div>
              <div className="poster poster-four"><span>纪录</span></div>
            </div>
            <div className="console-footer"><span><b>4K</b> 清晰画质</span><span><b>4</b> 类设备</span><span><b>1</b> 个账号</span></div>
          </div>
        </section>

        <section className="intro-strip" aria-label="试用说明">
          <div className="section-shell intro-strip-inner">
            <p><span>新用户礼遇</span>先用 {SITE_CONFIG.trialDays} 天，确认适合你的设备与网络再开通。</p>
            <a href="#contact">立即申请 <Arrow /></a>
          </div>
        </section>

        <section className="section-shell content-section" id="features" aria-labelledby="features-title">
          <div className="section-heading">
            <div><span className="section-index">01 / 体验</span><h2 id="features-title">把注意力留给好内容</h2></div>
            <p>少一点折腾，多一点沉浸。从打开应用到继续播放，每一步都足够自然。</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
                <h3>{feature.title}</h3><p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
          <div className="section-shell">
            <div className="section-heading light-heading">
              <div><span className="section-index">02 / 套餐</span><h2 id="pricing-title">简单透明，按需选择</h2></div>
              <p>所有套餐均可先申请 2 天免费试用。开通前请向客服确认账号、设备及续费规则。</p>
            </div>
            <div className="pricing-grid">
              {SITE_CONFIG.plans.map((plan) => (
                <article className={"price-card" + ("featured" in plan && plan.featured ? " featured" : "")} key={plan.name}>
                  <div className="plan-topline"><h3>{plan.name}</h3><span>{plan.badge}</span></div>
                  <div className="price-line"><strong><sup>¥</sup>{plan.price}</strong><span>{plan.unit}</span></div>
                  <p>{plan.note}</p>
                  <ul><li>支持多类常用设备</li><li>观看进度跨端同步</li><li>可申请 2 天免费试用</li></ul>
                  <a className={"featured" in plan && plan.featured ? "button button-primary" : "button button-secondary"} href="#contact">选择{plan.name}<Arrow /></a>
                </article>
              ))}
            </div>
            <p className="pricing-note">* 页面价格为会员介绍信息；实际服务范围与开通规则以客服最终确认为准。</p>
          </div>
        </section>

        <section className="section-shell content-section" id="guide" aria-labelledby="guide-title">
          <div className="section-heading">
            <div><span className="section-index">03 / 教程</span><h2 id="guide-title">四步开始观看</h2></div>
            <p>提前准备好常用设备与网络环境，试用时更容易判断真实体验。</p>
          </div>
          <ol className="steps-grid">
            {steps.map((step) => (
              <li key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>
            ))}
          </ol>
          <div className="device-bar" aria-label="支持的设备类型">
            <span>适配设备</span>
            <div><b>iPhone / iPad</b><b>Android</b><b>Windows / macOS</b><b>智能电视</b></div>
          </div>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-shell faq-layout">
            <div className="faq-intro">
              <span className="section-index">04 / FAQ</span><h2 id="faq-title">常见问题</h2>
              <p>还有疑问？试用前告诉客服你的设备类型与主要使用场景。</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true">＋</span></summary><p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-card">
            <div className="contact-orbit" aria-hidden="true" />
            <span className="section-index">准备好了吗？</span><h2 id="contact-title">先试两天，再选套餐。</h2>
            <p>联系客服领取试用信息，建议附上你的设备类型，方便快速完成设置。</p>
            <div className="contact-actions">
              <a className="button button-light" href={SITE_CONFIG.contactHref}>{SITE_CONFIG.contactLabel}<Arrow /></a>
              <span>{SITE_CONFIG.contactStatus}</span>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div>
            <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">11Y</span><span className="brand-name">{SITE_CONFIG.brand}</span></a>
            <p>清晰、轻松的私人影音体验。</p>
          </div>
          <div className="footer-links"><a href="#pricing">会员套餐</a><a href="#guide">使用教程</a><a href="#faq">常见问题</a><a href="#contact">联系客服</a></div>
          <div className="footer-domain"><span>访问域名</span><strong>{SITE_CONFIG.domain}</strong></div>
        </div>
        <div className="section-shell legal-copy">
          <p>合法授权提示：本站仅用于介绍已获合法授权的会员服务，不存储、上传或传播任何未经授权的影视内容。用户应遵守所在地法律法规及内容提供方的授权范围。</p>
          <p>EMBY 为其各自权利人的商标；本站与 EMBY 官方无隶属或背书关系。</p>
        </div>
      </footer>
    </main>
  );
}

