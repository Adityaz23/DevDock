<footer className="border-t bg-muted/30 border-pink-200">
  <div className="mx-auto max-w-6xl px-4 py-12">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      
      {/* Brand */}
      <div>
        <h3 className="text-lg font-semibold">DevDock</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          A platform for developers to share projects, get feedback, 
          and connect with creators worldwide.
        </p>
      </div>

      {/* Product */}
      <div>
        <h4 className="text-sm font-semibold tracking-wide">PRODUCT</h4>
        <ul className="mt-2 space-y-2 text-sm">
          <li>Explore Projects</li>
          <li>Share a Project</li>
          <li>Features</li>
        </ul>
      </div>

      {/* Community */}
      <div>
        <h4 className="text-sm font-semibold tracking-wide">COMMUNITY</h4>
        <ul className="mt-2 space-y-2 text-sm">
          <li>Creators</li>
          <li>Guidelines</li>
          <li>Feedback</li>
        </ul>
      </div>

      {/* Connect */}
      <div>
        <h4 className="text-sm font-semibold tracking-wide">CONNECT</h4>
        <div className="mt-3 flex gap-4 text-muted-foreground">
          <IconGithub />
          <IconTwitter />
          <IconLinkedin />
        </div>
      </div>
    </div>

    <hr className="my-8 border-pink-200/60" />

    <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
      <p>© 2025 DevDock. All rights reserved.</p>

      <div className="flex gap-6">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  </div>
</footer>
