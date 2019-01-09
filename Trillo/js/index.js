const hotels = [
  'Terra Cave Hotel',
  'Azure Cave Suites',
  'Hich Hotel Konya',
  'Elika Cave Suites',
  'Dere Suites',
  'Acropolis Cave Suite',
  'Mira Cappadocia Hotel',
  'Karlik Evi Boutique Hotel',
  'Ansia Hotel',
  'Eyes Of Cappadocia Cave Hotel',
  'Oread Cave Suites',
  'Ab-u Hayat Cave Suites',
  'Serguzest Otel',
  'Sakli Konak',
];

const autocomplete = (inp, arr) => {
  let currentFocus;
  inp.addEventListener('input', function(e) {
    let val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    let a = document.createElement('DIV');
    a.setAttribute('id', this.id + 'autocomplete-list');
    a.setAttribute('class', 'autocomplete-items');
    this.parentNode.appendChild(a);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        let b = document.createElement('DIV');
        b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>';
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener('click', function(e) {
          inp.value = this.getElementsByTagName('input')[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener('keydown', function(e) {
    let x = document.getElementById(this.id + 'autocomplete-list');
    if (x) x = x.getElementsByTagName('div');
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  addActive = x => {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add('autocomplete-active');
  };
  removeActive = x => {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active');
    }
  };
  closeAllLists = elmnt => {
    let x = document.getElementsByClassName('autocomplete-items');
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  };

  document.addEventListener('click', function(e) {
    closeAllLists(e.target);
  });
};

autocomplete(document.getElementById('myInput'), hotels);

//////////////// DROPDOWN //////////////////////////

window.onclick = function(event) {
  const btn = event.target.closest('.dropbtn');
  if (btn) {
    const dropdowns = document.querySelector('.dropdown-content');
    dropdowns.classList.toggle('show');
  }
};
