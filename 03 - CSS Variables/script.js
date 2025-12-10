const inputs = document.querySelectorAll('.controls input');
// console.log(inputs)

function handlUpdate (){
    // console.log(this.value);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


inputs.forEach(input => input.addEventListener('change', handlUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handlUpdate));