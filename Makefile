clean_watchman:
	watchman watch-del-all && rm -rf $TMPDIR/metro-* && rm -rf node_modules/ && yarn cache clean && yarn install
clean_ios:
	rm -rf ios/build && rm -rf ios/Pods && rm ios/Podfile.lock &&  cd ios && pod deintegrate && pod install
clean_android:
	rm -rf android/app/build && cd android && ./gradlew clean

release_build_android:
	yarn android mode=release
