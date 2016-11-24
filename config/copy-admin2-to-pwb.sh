# chmod 755 copy-admin2-to-pwb.sh



# TARGET_DIR=../../inmo1/public/fe/admin2-client/$(date +%Y-%m-%d)
# rm -r $TARGET_DIR
# mkdir -p $TARGET_DIR

# cp -r ../dist/ $TARGET_DIR


TARGET_JS_DIR=../../../sites-2016-oct-pwb/pwb/vendor/assets/javascripts
cp ../dist/assets/inmo1-client*.js $TARGET_JS_DIR/pwb-admin.js
cp ../dist/assets/vendor*.js $TARGET_JS_DIR/pwb-admin-vendor.js

TARGET_CSS_DIR=../../../sites-2016-oct-pwb/pwb/vendor/assets/stylesheets
cp ../dist/assets/inmo1-client*.css $TARGET_CSS_DIR/pwb-admin.scss
cp ../dist/assets/vendor*.css $TARGET_CSS_DIR/pwb-admin-vendor.scss


# FONT_FILES=../dist/fonts
# for ff in $FONT_FILES
# do
#   echo $ff
#   # cp -r $ff $TARGET_JS_DIR
# done



# before running this file, need to make 
# sure node -v is 0.12.7
# and run below:
# ember build --environment=production

# after running, need to edit this file:
# /Users/etewiah/Ed/sites-2015-spt/inmo1/app/views/layouts/admin2_client.html.erb


