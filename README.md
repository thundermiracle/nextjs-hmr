# nextjs-hmr
#### Sample of how to enable hmr via Vagrant + Virtualbox or Docker in nextjs

hmr(HotModuleReplacement) is one of the MUST HAVE functions in web development. But as <strong>VirtualBox DOESN'T </strong>(and will not) provide a mechanism to watch on file changes. It's only possible to <strong><em>poll for changes</em></strong>.
This project is a sample of how to <strong>poll for changes</strong> with webpack options in nextjs.

<br/>

#### Following environments have been tested with Windows10 + Vagrant1.9.5 + VirtualBox5.1.22:
- CentOS7
- Ubuntu14

#### Following Docker image has been tested as well
- node:boron-alpine
```
docker-compose up -d
```

#### Test

Try change the backgroud color in [index.js](/src/pages/index.js)

#### Referencens:
- https://webpack.js.org/configuration/watch/#watchoptions
