const arrDciModules = [
    'HTML/CSS', 'JavaScript', 
    'DOM', 'NodeJS', 
    'Data Server', 
    'Fullstack Server', 
    'Final Project'
]


const getHtml = (req, res) => {
    let modulesHtml = arrDciModules.map(module => {
        return "<li>" + 
            (module == "Data Server" ? `<b>${module}</b>` : module)
            + "</li>"
    })
    res.send(`<ul>${modulesHtml.join("")}</ul>`)
}

const getText = (req, res) => {
    res.send(arrDciModules.join(","))
}

const getJson = (req, res) => {
    res.json(arrDciModules)
}

module.exports = {getHtml, getJson, getText}