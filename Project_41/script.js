const codes = document.querySelectorAll('input')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >=0 && e.key <=9) {
            codes[idx].value = ''
            setTimeout(() => {
                if (idx < codes.length-1) {
                    codes[idx+1].focus()
                }
            }, 10)
            console.log(codes[idx+1])
        }

        if (e.key == 'Backspace') {
            setTimeout(() => codes[idx-1].focus(), 10)
            codes[idx].value = '0'
        }
    })
})