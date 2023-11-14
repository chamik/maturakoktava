# Jekyll + Tailwind CSS template

This is a dead simple Github template repository that takes care of the boring boilerplate of setting up a Jekyll site with Tailwind CSS. There is an absolute minimum of pre-written html, allowing you to get to work as quickly as possible.

## Setup

You will obviously need [Ruby](https://www.ruby-lang.org/en/downloads/), [Node.js](https://nodejs.org/en/download/), and [Jekyll](https://jekyllrb.com/docs/installation/) installed.

1. Click the green `Use this template` button at the top of this page and wait for Github to do its thing
2. Clone your newly initialized repo
3. Run `npm run setup` in the repository root. This will download all of the needed dependencies
4. Edit the `_config.yml` configuration file to your liking (specific instructions inside)
5. You're done!

## Development

To start the live server run:
```sh
$ npm start
```

If you edited any of the configuration files while the live server was running, you will need to restart it for the changes to take effect.

Once you're happy with your site, terminate your live server and run:
```sh
$ npm run build
```

The output will be in the `build/` directory.

Happy coding!
