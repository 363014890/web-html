// Data for the cards
const cardData = [
    {
        id: 0,
        title: "AP Chem",
        about: "For students interested in chemical and physical sciences and biological sciences",
        tags: ['AP'],
        booked: false,
        difficulty: 88,
        color: '',
    },
    {
        id: 1,
        title: "AP Biology",
        about: "With supporting text below as a natural lead-in to additional content.",
        tags: ['AP', 'Electives'],
        booked: false,
        difficulty: 68,
        color: '',
    },
    {
        id: 2,
        title: "AP Calculus",
        about: "For students interested in chemical and physical sciences and biological sciences",
        tags: ['AP', 'IB'],
        booked: false,
        difficulty: 65,
        color: '',
    },
    {
        id: 3,
        title: "AP Physics",
        about: "With supporting text below as a natural lead-in to additional content.",
        tags: ['AP'],
        booked: false,
        difficulty: 30,
        color: '',
    }
]

// Progress Bar Colors
cardData.forEach(card => {
    let diff = card.difficulty
    if (diff < 0) {
        console.log('Invalid difficulty')
    } else if (diff <= 30) {
        card.color = 'green'
    } else if (diff <= 70) {
        card.color = 'orange'
    } else if (diff <= 100) {
        card.color = 'red'
    } else {
        console.log('Invalid difficulty')
    }
})

// Making cards
loadCards = () => {
    let html = ""
    
    cardData.forEach(function(value, key) {
        html = html + makeCards(cardData[key])
    })

    document.getElementById('main').innerHTML = html
}

makeCards = (cardData) => {
    let template = document.getElementById('main').innerHTML
    return eval('`' + template + '`')
}

// Clear screen
clear = () => {
    document.getElementById('main').innerHTML = ''
}

// Filter
loadFilter = (tempCardData) => {
    let html = ""
    
    tempCardData.forEach(function(value, key) {
        html = html + makeCards(tempCardData[key])
    })

    document.getElementById('main').innerHTML = html
}

makeFilter = (tempCardData) => {
    let template = document.getElementById('main').innerHTML
    return eval('`' + template + '`')
}

// List Functionality
let listData = [`<div class="dropdown-divider"></div> Press the <i class="bi bi-bookmark-fill"></i> icon <br>to add courses to your list`]
let dropdown = document.getElementById('listData')
let filter_dropdown = document.getElementById('filter-by-class')

listAdd = (target_id) => {
    let html = ""
    target = target_id.split('-')[1]

    if (cardData[target].booked == false) {
        cardData[target].booked = true
        document.getElementById(target_id).style.fill = 'goldenrod'

        $('.toast').toast({
            delay: 1000
        });
        $('.toast').toast('show')
    } else {
        cardData[target].booked = false
        document.getElementById(target_id).style.fill = 'black'
    }

    let title = cardData[target].title

    if (!listData.includes(title)) {
        listData.unshift(title)
    } else {
        listData = listData.filter(element => element !== title)
    }

    
    listData.forEach(title => {
        if (title != `<div class="dropdown-divider"></div> Press the <i class="bi bi-bookmark-fill"></i> icon <br>to add courses to your list`) {
            html = html + `<div class="dropdown-divider"></div><li class="text-center my-3">${title}</li>`
        } else {
            html = html + `<li class="text-center">${title}</li>`
        }
    })
    
    dropdown.innerHTML = html
}

// Set search bar and display results value to what was searched in /index.html
let searchbar = document.getElementById('searchbar')
let display_results = document.getElementById('schoolname')

setVal = () => {
    $('.collapse').collapse()
    searchbar.value = localStorage.getItem("search_val")
    display_results.textContent = localStorage.getItem("search_val")
    localStorage.removeItem("search_val")

    let classNames = localStorage.getItem("options").split(',')
    let filterhtml = ""
    let html = ""

    listData.forEach(title => {
        html = html + `<li class="text-center">${title}</li>`
    })

    classNames.forEach(className => {
        filterhtml = filterhtml + `<li class="dropdown-item" onclick="filter(this.innerHTML)">${className}</li>`
    })
    
    dropdown.innerHTML = html
    filter_dropdown.innerHTML = filterhtml
}

filter = (filter_text) => {
    document.getElementById('main').innerHTML = `<h5 class="mx-auto">Feature to be implemented in next version</h5>`
    // let tempCardData = cardData.filter(card => card.tags.includes(filter_text))
    // clear()
    // loadFilter(tempCardData)
}

// Automatically type in the search bar when you press a key
document.addEventListener('keydown', () => {
    searchbar.focus()
})


