echo "Serving ahmadnoor!"
serve -p 4000 -s build

#!/bin/sh
setup_deploy() {
          ok = true
  if cd /var/www &&  cd portifolio && git pull origin master; then
    echo ''
    echo '✅ Successfully Got latest pull\n'
  else
    echo '🥶 git pull  failed\n'
    ok = false
fi

  if [ -z "$ok" ] ; then
    npm install
    echo ''
    echo '✅  Successfully installed packages'
  else
    echo ''
    printf 'failed installing'
        ok = false
fi


  if [ -z "$ok" ] ; then
    npm run build
    echo ''
    echo '✅  Successfully Created Build'
  else
    echo ''
    printf 'failed Building'
        ok = false
fi

  if [ -z "$ok" ] ; then
     pm2 stop ahmadnoor
    echo ''
    echo '✅  Successfully Stop Current Process'
  else
    echo ''
    printf 'failed Stop Process'
        ok = false
fi
  if [ -z "$ok" ] ; then
     npm run deploy-pm2
    echo ''
    echo '✅ Successfully Deployed and Online'
    echo ''
    echo '✅ ✅ ✅ ✅ ✅ ✅ ✅'

  else
    echo ''
    printf 'failed Stop Process'
    ok = false
fi
}

# cd /var/www &&  cd portifolio && git pull origin master && npm install && npm run build && pm2 stop ahmadnoor &&  npm run deploy-pm2
setup_deploy