# chmod 755 copy-admin2-to-rails.sh

# rake inmo:read_in_ember_moodleboard
# after running above, navigate to 
# http://mgmt.tee.dev:3000/mgmt/deploys/moodleboard


TARGET_DIR=../../inmo1/public/fe/admin2-client/$(date +%Y-%m-%d)
rm -r $TARGET_DIR
mkdir -p $TARGET_DIR

cp -r ../dist/ $TARGET_DIR

# ASSETT_FILES=../dist/assets

# echo $ASSETT_FILES

# for rf in $ASSETT_FILES
#   do
#     echo $rf
#     cp -r $rf $TARGET_DIR
#   done

