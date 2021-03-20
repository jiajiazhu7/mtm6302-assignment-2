const img_list = [{
		img: 'img/1.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/2.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/3.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/4.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/5.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/6.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/7.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/8.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/9.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/10.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/11.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
	{
		img: 'img/12.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ac diam sed congue. Praesent et magna ac nunc ultrices sollicitudin sit amet in nulla. Nulla eget nunc odio.'
	},
]
const mask = {
	src: '',
	curr: 0,
	mbox: null,
	imgbox: null,

	init: function() {
		let that = this
		this.mbox = document.createElement('div')
		this.mbox.classList.add('mbox')
		let hidebtn = document.createElement('div')
		hidebtn.classList.add('close')
		hidebtn.addEventListener('click', this.hide)

		let leftdiv = document.createElement('div')
		leftdiv.classList.add('prev')
		leftdiv.addEventListener('click', () => {
			that.leftPic()
		})

		let rightbtn = document.createElement('div')
		rightbtn.classList.add('next')
		rightbtn.addEventListener('click', () => {
			that.rightPic()
		})

		this.mbox.appendChild(hidebtn)
		this.mbox.appendChild(rightbtn)
		this.mbox.appendChild(leftdiv)
		this.imgbox = document.createElement('div')
		this.imgbox.classList.add('img')
		this.mbox.appendChild(this.imgbox)
		document.body.appendChild(this.mbox)
	},
	hide: function() {
		console.log(this)
		mask.mbox.classList.remove('show')
	},
	show: function(i) {
		console.log(this)
		let text = `<img src="${img_list[i].img}" >
				<p>${img_list[i].text}</p>`
		this.imgbox.innerHTML = text
		this.mbox.classList.add('show')
	},
	leftPic: function() {
		if (this.curr == 0) {
			this.curr = 11
		} else {
			this.curr--
		}
		this.show(this.curr)
	},
	rightPic: function() {
		if (this.curr == 11) {
			this.curr = 0
		} else {
			this.curr++
		}
		this.show(this.curr)
	},

}
mask.init()
const box = {
	box: null,
	init: function() {
		this.box = document.createElement('div')
		this.box.classList.add('box')
		let text = ''
		
		// event d
		this.box.addEventListener('click',function(e){
			let ind=e.target.getAttribute('data-id')
			mask.show(ind)
		})
		for (let i = 0; i < img_list.length; i++) {
			let midimg = new Image()
			
			midimg.setAttribute('data-id',i)
			midimg.src = img_list[i].img
			this.box.appendChild(midimg)
			
		}
		// this.box.innerHTML=text
		document.body.appendChild(this.box)
	}
}
box.init()
