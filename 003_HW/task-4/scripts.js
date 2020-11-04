window.onload = function() {
    let lessonDescriptionTriggers = document.getElementsByClassName("lesson-description-trigger");

        for (let i = 0; i < lessonDescriptionTriggers.length; i++) {
            let lessonDescriptionTrigger = lessonDescriptionTriggers[i],
            lessonId = lessonDescriptionTrigger.dataset.lessonid,
            lessonWindow,
            lessonWindowOpened;

            lessonDescriptionTrigger.addEventListener('click', function(){
                lessonWindowOpened = lessonDescriptionTrigger.dataset.lessonwindowopened;
            
                if(lessonWindowOpened === 'true'){
                    lessonWindow.close();
                    lessonDescriptionTrigger.dataset.lessonwindowopened = false;
                    lessonDescriptionTrigger.innerHTML = "Open Lesson " + lessonId;
                }else{
                    lessonWindow = window.open("lesson-" + lessonId +".html", "Lesson" + lessonId + "", "top=" + 100*lessonId + ",left=" + 100*lessonId + ",width=400,height=400,status=yes,resizable=no");
                    lessonDescriptionTrigger.dataset.lessonwindowopened = true;
                    lessonDescriptionTrigger.innerHTML = "Close Lesson " + lessonId;
                }
            });
        }
}