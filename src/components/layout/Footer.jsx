const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAWZFxSVZB3BZ1gu1M5d9UDOSYnBsf3000ai7Xx47NK_zo7vgWbQ5TqOev_QHld307-Pqn5qP8omty8aZxJFN1qBw7iLg25bt1H63gzvy5o3mlhVMStZt3UBzGI0mopRYWeW1iRbLtEgnoHp-c5oThEkDOXkXgIqS2kHFqtTzFLNGXMZjwW9AnoRbEBq4PE4AmtStOM5dGfTPM3_d0SvU2mpki5FpEongpRI45opOikc1HIWyarLQo9X0aNO9XXNw9xstXvj6Xq5Ip2'

export default function Footer({ showLogo = true }) {
  return (
    <footer className="bg-surface-container-highest border-t-2 border-eco-maroon mt-section-gap">
      <div className="flex flex-col md:flex-row justify-between items-center py-section-gap px-container-margin w-full max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-stack-sm">
          <div className="flex items-center gap-2">
            {showLogo && (
              <img alt="ThriftVibe Logo" className="h-8 w-auto" src={LOGO_URL} />
            )}
            <span className="font-headline-lg text-headline-lg font-black text-eco-maroon">
              ThriftVibe
            </span>
          </div>
          <p className="text-on-surface-variant font-body-md text-center md:text-left">
            © 2024 ThriftVibe. Good for the planet, better for your style.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-gutter">
          <a
            className="font-body-md text-on-surface-variant hover:text-blush-base transition-colors"
            href="#"
          >
            Instagram
          </a>
          <a
            className="font-body-md text-on-surface-variant hover:text-blush-base transition-colors"
            href="#"
          >
            TikTok
          </a>
          <a
            className="font-body-md text-on-surface-variant hover:text-blush-base transition-colors"
            href="#"
          >
            Sustainability Report
          </a>
          <a
            className="font-body-md text-on-surface-variant hover:text-blush-base transition-colors"
            href="#"
          >
            FAQ
          </a>
        </div>
      </div>
    </footer>
  )
}
