let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

let  thRow = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
th1.textContent = 'id';
th2.textContent = 'name';
th3.textContent = 'e-mail';
thRow.append(th1, th2, th3);

thead.appendChild(thRow);
table.appendChild(thead);



let url = 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json';
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = function(){
    let data = request.response;

    let arr=[];

    let firstBtn = document.createElement('button');
    firstBtn.textContent = 'First';
    firstBtn.onclick = function(){
        tbody.innerHTML = '';
        for(i=0; i<data.length-90; i++){
            let tbRows = document.createElement('tr');
                let td1 = document.createElement('td');
                    td1.textContent = (data[i].id);
                let td2 = document.createElement('td');
                    td2.textContent = (data[i].name);
                let td3 = document.createElement('td');
                    td3.textContent = (data[i].email);
                
                
                tbRows.append(td1, td2, td3);
                tbody.appendChild(tbRows);
                table.appendChild(tbody);
        
            }
        }
    
    document.body.append(firstBtn)

    for(i=0; i<=10; i++){
        let btn=document.createElement('button')
        btn.innerHTML = i;
        arr.push(btn);
        document.body.appendChild(btn)
    }

    let lastBtn = document.createElement('button');
    lastBtn.textContent = 'Last';
    lastBtn.onclick = function(){
        tbody.innerHTML = '';
        for(i=90; i<data.length; i++){
            let tbRows = document.createElement('tr');
                let td1 = document.createElement('td');
                    td1.textContent = (data[i].id);
                let td2 = document.createElement('td');
                    td2.textContent = (data[i].name);
                let td3 = document.createElement('td');
                    td3.textContent = (data[i].email);
                
                
                tbRows.append(td1, td2, td3);
                tbody.appendChild(tbRows);
                table.appendChild(tbody);
        
            }
    }
    
    document.body.append(lastBtn)

    arr[0].hidden = true
    
  

    for(let j=0; j<arr.length; j++){
        arr[j].onclick = function(){
            tbody.innerHTML = '';

            for(let i=(j-1)*10; i<(10*j); i++){
                let tbRows = document.createElement('tr');
                let td1 = document.createElement('td');
                    td1.textContent = (data[i].id);
                let td2 = document.createElement('td');
                    td2.textContent = (data[i].name);
                let td3 = document.createElement('td');
                    td3.textContent = (data[i].email);
                
                
                tbRows.append(td1, td2, td3);
                tbody.appendChild(tbRows);
                table.appendChild(tbody);
        
            }
        }
      
        
    }  
    
    
   
}


document.body.appendChild(table)