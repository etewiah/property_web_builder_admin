# chmod 755 copy-to-rails.sh


TARGET_ASSETS_DIR=../../inmo1/public/fe/client/$(date +%Y-%m-%d)/assets
mkdir -p $TARGET_ASSETS_DIR

rm -r $TARGET_ASSETS_DIR
ASSETT_FILES=../dist/assets

echo $ASSETT_FILES

for rf in $ASSETT_FILES
  do
    echo $rf
    cp -r $rf $TARGET_ASSETS_DIR
  done


TARGET_FONTS_DIR=../../inmo1/public/fe/client/$(date +%Y-%m-%d)/fonts
mkdir -p $TARGET_FONTS_DIR

rm -r $TARGET_FONTS_DIR
FONT_FILES=../dist/fonts
for ff in $FONT_FILES
do
  echo $ff
  cp -r $ff $TARGET_FONTS_DIR
done


TARGET_IMAGES_DIR=../../inmo1/public/fe/client/$(date +%Y-%m-%d)/img
mkdir -p $TARGET_IMAGES_DIR

rm -r $TARGET_IMAGES_DIR
IMG_FILES=../dist/img
for imgf in $IMG_FILES
do
  cp -r $imgf $TARGET_IMAGES_DIR
done