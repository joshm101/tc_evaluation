Classes to change           Initial Value (routing-guide)           Updated value (pre-chat-survey)
---------------------------------------------------------------------------------------------------

all-content-wrapper         height: 468px                           height: 623px
main-content-wrapper        height: 404px                           height: 559px
nav-location-wrap           display: inline                         display: none
topics-list-wrap            display: inline                         display: none
back-btn-wrap               display: inline                         display: none  
input-form                  display: none                           display: block

Classes to change           Initial value (pre-chat survey)         Updated value (successful submit)
-----------------------------------------------------------------------------------------------------
input-form                  display: block                          display: none
question                    "Which Mobile topic..."                 "Congratulations!! You have..."  


One important improvement to this form would be to
"refresh" the errors after successive start chat button
presses. So if you filled out another field after
receiving your initial set of errors, the field that was filled
out would no longer be displaying an error. Usually the client
fixes all errors after the first incorrect submission, though.