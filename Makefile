clean_watchman:
	watchman watch-del-all && rm -rf $TMPDIR/metro-* && rm -rf node_modules/ && yarn cache clean && yarn install
clean_ios:
	rm -rf ios/build && rm -rf ios/Pods && rm ios/Podfile.lock && rm -rf ~/Library/Developer/Xcode/DerivedData  &&  cd ios && pod install
clean_android:
	rm -rf android/app/build && cd android && ./gradlew clean
