Namaste React JS 🚀🚀

# **Episode 02:-**

# **package json & package-lock.json file:-**

package.json ==>> it maintains the version of package that we have installed but

package-lock.json ==>> it maintains the version of all the dependant packages that we have installed.

ex:- if we have insalled parcel package in package.json we will get the version of parcel only,

but our parcel package is dependant on many other packages and that many other packages are dependant on again other packages this is nothing but transitive dependancy and to maintain the version of all these packages we have package-lock.json file.

# **npm & npx coomand:-**

to install any package we use npm command like==>> npm i parcel.

but to exicute this package we use npx command like ==>> npx parcel index.html.

# **parcel:- what parcel does ??**

dev build

local server

HMR- Hot module replacement

File watcing algorithum:- written in C++

caching - faster build

image optimization

minification

bundling

compressing

consistant hashing

code spliting

diffrential bundling - support older browsers

diagnostic

error handling

tree sheaking - remove unused code

diffrenet build for production and production bundles

**npx parcel build index.html ==>> to get the production build**

**npx parcel index.html ==>> to get the dev build**

# **.gitignore file**

we do not push the files to github which can be re-generated, like node modules, dist folder, parcel cache

we put these files in the .gitignore file soa that it will not get pushed to github.

# **Browser Compatibility:-**

how i can make my app compatible for any versions ?? in package.json file we can add something like browserlist and pass and array of browser which version we wanted.

ex:-

"browserlist": [

    "last 2 Chrome version",

    "last 2 Firefox version",

    "last 2 Safari version",

    "last 2 Edge version"

  ]
