# chmod 755 copy-admin2-to-rails.sh

# - current as of june 2016


# rake inmo:read_in_ember_moodleboard
# after running above, navigate to 
# http://mgmt.tee.dev:3000/mgmt/deploys/moodleboard


TARGET_DIR=../../inmo1/public/fe/admin2-client/$(date +%Y-%m-%d)
rm -r $TARGET_DIR
mkdir -p $TARGET_DIR

cp -r ../dist/ $TARGET_DIR


# before running this file, need to make 
# sure node -v is 0.12.7
# and run below:
# ember build --environment=production

# after running, need to edit this file:
# /Users/etewiah/Ed/sites-2015-spt/inmo1/app/views/layouts/admin2_client.html.erb







# ASSETT_FILES=../dist/assets

# echo $ASSETT_FILES

# for rf in $ASSETT_FILES
#   do
#     echo $rf
#     cp -r $rf $TARGET_DIR
#   done

