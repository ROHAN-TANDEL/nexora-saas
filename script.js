const details={
 master:['01','Master only','A lightweight product can operate entirely from its master database. No tenant-specific database layer is required.'],
 client:['02','Master + Client','Separate master and client responsibilities. Useful when product data needs its own database boundary.'],
 schema:['03','Master + Client · Multi-schema','A client database can isolate client data by schema while the application keeps the same database-facing contract.'],
 multi:['04','Master + Client · Multiple DBs','Clients can be separated across independent databases when stronger physical isolation is required.'],
 extra:['05','Master + Client · Extra DBs','Add reporting, analytics, audit or other specialized stores when the product actually needs them.']
};
const detail=document.querySelector('#model-detail');
document.querySelectorAll('.model').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.model').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const d=details[btn.dataset.model];detail.innerHTML=`<div class="detail-icon">${d[0]}</div><div><h3>${d[1]}</h3><p>${d[2]}</p></div>`;}));
const progress=document.querySelector('.progress');window.addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=`${(h.scrollTop/(h.scrollHeight-h.clientHeight))*100}%`;});
