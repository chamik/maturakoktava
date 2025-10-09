source "https://rubygems.org"

# ruby "3.3.9"

group :jekyll_plugins do
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
  gem 'webrick'       # Needed for Ruby 3+
  gem 'csv'           # Standard library; explicitly added for Ruby 3.4+
  gem 'base64'        # Standard library; explicitly added for Ruby 3.4+
end

# Windows and JRuby do not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Optional: Performance-booster for watching directories on Windows
# If you run into native build issues, you can comment this out
# gem "wdm", "~> 0.2.0", platforms: [:mingw, :x64_mingw, :mswin]

gem 'json'            # Needed by Jekyll; keeps native extension version compatible
