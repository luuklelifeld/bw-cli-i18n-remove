# Bitwarden Command-line Interface

[![Platforms](https://imgur.com/AnTLX0S.png "Platforms")](https://help.bitwarden.com/article/cli/#download--install)

The Bitwarden CLI is a powerful, full-featured command-line interface (CLI) tool to access and manage a Bitwarden vault. The CLI is written with TypeScript and Node.js and can be run on Windows, macOS, and Linux distributions.

![CLI](https://raw.githubusercontent.com/bitwarden/brand/master/screenshots/cli-macos.png "CLI")

## Fork

This is **not** the official Bitwarden CLI, you can find that [here](https://www.npmjs.com/package/@bitwarden/cli). This is a fork of the official project which removes the dependency on a file called `messages.json`. The reason for this is that this file is not properly added to the node_modules folder when deploying to Microsoft Azure Functions.

If you're interested in using Bitwarden passwords in your node project, check out my [bitwarden-js interface](https://github.com/luuklelifeld/bitwarden-js). This interfaces with the Bitwarden CLI to retrieve your passwords in a secure manner.
