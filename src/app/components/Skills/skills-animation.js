const skillsContainer = document.querySelectorAll(".skillsContainer")

    function skillAnimation () {
        skillsContainer.forEach((skill) => {
            skill.setAttribute("data-animated", true);
        })
    }