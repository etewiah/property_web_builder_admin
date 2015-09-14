# chmod 755 copy-to-rails.sh

# FONT_FILES=../dist/fonts

# rm -r ../../inmo1/public/fe/default/fonts
# for f in $FONT_FILES
# do
#   cp -r $f ../../inmo1/public/fe/default/fonts
# done

TARGET_ASSETS_DIR=../../inmo1/public/fe/default/$(date +%Y-%m-%d)/assets
mkdir -p $TARGET_ASSETS_DIR

rm -r $TARGET_ASSETS_DIR
ASSETT_FILES=../dist/assets

for f in $ASSETT_FILES
do
  cp -r $f $TARGET_ASSETS_DIR
done
