rebuild_alias:
	watchman watch-del-all && rm -rf $TMPDIR/metro-* && rm -rf node_modules/ && yarn cache clean && yarn install