const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div>
    <table>
      <tr>
        <th>e.key</th>
        <th>e.keyCode</th>
        <th>e.code</th>
      </tr>
      <tr>
        <th>${e.key}</th>        <!-- a -->
        <th>${e.keyCode}</th>    <!-- 65 -->
        <th>${e.code}</th>       <!-- KeyA -->
      </tr>
  
    </table>
  
  </div>
  `

});
