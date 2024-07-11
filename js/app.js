const form = document.querySelector('form')
const employeeList = document.querySelector('tbody')


form.addEventListener ('submit',(e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const firstname = formData.get('firstname')
    const lastname = formData.get('lastname')
    const email = formData.get('email')
    const hireDate = formData.get('hire_date')
    const photo = formData.get('photo')
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"

    const employee = document.createElement('tr')
    employeeList.append(employee)

    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')
    const td5 = document.createElement('td')
    const td6 = document.createElement('td')

    const img = document.createElement('img')
    img.src = URL.createObjectURL(photo)
    img.width = 100

    employee.append(td1)
    td1.append(img)
    employee.append(td2)
    td2.innerHTML = firstname
    employee.append(td3)
    td3.innerHTML = lastname
    employee.append(td4)
    td4.innerHTML = email
    employee.append(td5)
    td5.innerHTML = hireDate
    employee.append(td6)
    td6.append(deleteBtn)


    deleteBtn.addEventListener('click', () => {
        employeeList.removeChild(employee);
    })
})



