// DROPNAVBAR

const dropNavbar = () => {
    if($('.dropNav').hasClass('dropNav-on')){
        $(".dropNav").removeClass('dropNav-on')
    }else{
        $(".dropNav").addClass('dropNav-on')
    }
} 