let data;
if (localStorage.getItem("itemsData")) {
  data = JSON.parse(localStorage.getItem("itemsData"));
} else {
  localStorage.setItem("itemsData", JSON.stringify(items));
  data = JSON.parse(localStorage.getItem("itemsData"));
}

cbiIndex = data.findIndex((item) => item.isAuctioning);
currentBiddingItem = data[cbiIndex];
function onNotFoundPage() {
  landingPageContainer.style.display = "none";
  visitorContainer.style.display = "none";
  visitorListingContainer.style.display = "none";
  artistsContainer.style.display = "none";
  artistsItemsContainer.style.display = "none";
  auctionContainer.style.display = "none";
  notFoundContainer.style.display = "block";
}

function onLandingPage() {
  landingPageContainer.style.display = "block";
  visitorContainer.style.display = "none";
  visitorListingContainer.style.display = "none";
  artistsContainer.style.display = "none";
  artistsItemsContainer.style.display = "none";
  auctionContainer.style.display = "none";
  notFoundContainer.style.display = "none";
  fetchUsers();
}

function onArtistsPage() {
  document.querySelector(".logo-text").innerText = `${artistName}`;
  landingPageContainer.style.display = "none";
  visitorContainer.style.display = "none";
  visitorListingContainer.style.display = "none";
  artistsContainer.style.display = "block";
  artistsItemsContainer.style.display = "none";
  auctionContainer.style.display = "none";
  notFoundContainer.style.display = "none";

  let isAnyAuction = data.filter((item) => item.isAuctioning === true);
  if (isAnyAuction.length >= 1) {
    document.querySelector(".live-auctioning").style.display = "block";
  } else {
    document.querySelector(".live-auctioning").style.display = "none";
  }

  // Menu

  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.classList.add("d-flex");
  navMenuBtn.style.display = "block";
  navLogo.style.display = "block";
  logoContainer.classList.add("d-flex");
}

function onArtistsItemsPage() {
  document.querySelector(".logo-text").innerText = `${artistName}`;
  landingPageContainer.style.display = "none";
  visitorContainer.style.display = "none";
  visitorListingContainer.style.display = "none";
  artistsContainer.style.display = "none";
  artistsItemsContainer.style.display = "block";
  auctionContainer.style.display = "none";
  notFoundContainer.style.display = "none";

  // Menu

  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.classList.add("d-flex");
  navMenuBtn.style.display = "block";
  navLogo.style.display = "block";
  logoContainer.classList.add("d-flex");
}

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".artist-dropdown").innerHTML = "";
      let username = document.createElement("option");
      username.setAttribute("value", ``);
      username.innerText = `choose an artist`;
      document.querySelector(".artist-dropdown").appendChild(username);
      data.forEach((user) => {
        let username = document.createElement("option");
        username.innerText = `${user.name}`;
        username.setAttribute("value", `${user.name}`);
        document.querySelector(".artist-dropdown").appendChild(username);
      });
    });
}
 
function joinAsArtist(currentArtist, list) {
  currentArtist = list.value;
  userIsVisitor = false;
  if (list.value !== "") {
    location.hash = "#artists";

    let logoText = document.querySelector(".logo-text");
    logoText.innerText = `${currentArtist}`;
  }
}

function joinAsVisitor() {
  location.hash = "#visitors";
  userIsVisitor = true;
}

function showStatistics(selectedArtist) {
  selectedArtistItems = artistItemArray(selectedArtist);
  selectedArtistItems.forEach((item) => {
    console.log(new Date(item.dateCreated));
    console.log(Date.parse(item.dateCreated));
    console.log(Date.parse(item.dateCreated) - 86400000);
    console.log(new Date(Date.parse(item.dateCreated) - 86400000));
  });

  artistIncome(selectedArtistItems);
  artistSoldItems(selectedArtistItems);
  showCurrentBid(selectedArtistItems);
}

function artistIncome(artistItemsArray) {
  let totalIncome = 0;
  artistItemsArray.forEach((item) => {
    totalIncome = totalIncome + item.priceSold;
  });
  document.querySelector(".income-amount").innerText = `$${totalIncome}`;
}

function artistSoldItems(artistItemsArray) {
  let soldItems = artistItemsArray.filter((item) =>
    item.hasOwnProperty("dateSold")
  );

  document.querySelector(
    ".item-qty"
  ).innerText = `${soldItems.length}/${artistItemsArray.length}`;
}

function showCurrentBid(artistItemsArray) {
  let currentBid = document.querySelector(".live-auctioning .auction-amount");
  let itemsOnAuction = artistItemsArray.filter((item) => item.isAuctioning);
  if (itemsOnAuction.length >= 1) {
    if (localStorage.getItem("allBidsData")) {
      currentBid.innerText = `${
        JSON.parse(localStorage.getItem("allBidsData"))[
          JSON.parse(localStorage.getItem("allBidsData")).length - 1
        ]
      }$`;
    } else {
      currentBid.innerText = `0$`;
    }
  }
}

function artistItemArray(selectedArtist) {
  return data.filter((item) => item.artist === selectedArtist);
}

function createChart() {
  const labels = [];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sales Amount",
        backgroundColor: "#a26a5e",
        borderColor: "rgb(255, 99, 132)",
        hoverBackgroundColor: "#d44c2e",
        data: [],
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      indexAxis: "y",
    },
  };
  const myChart = new Chart(document.getElementById("myChart"), config);

  document.querySelector("#sevenDays").addEventListener("click", () => {
    myChart.clear();
    myChart.data.labels = getLastDays(7).dateLabel;
    myChart.data.datasets[0].data = getLastDays(7).salesData;
    myChart.update();
  });
  document.querySelector("#fourteenDays").addEventListener("click", () => {
    myChart.clear();
    myChart.data.labels = getLastDays(14).dateLabel;
    myChart.data.datasets[0].data = getLastDays(14).salesData;
    myChart.update();
  });
  document.querySelector("#oneMonth").addEventListener("click", () => {
    myChart.clear();
    myChart.data.labels = getLastDays(30).dateLabel;
    myChart.data.datasets[0].data = getLastDays(30).salesData;
    myChart.update();
  });
  document.querySelector("#oneYear").addEventListener("click", () => {
    myChart.clear();
    myChart.data.labels = getDataForLastOneYear().dateLabel;
    myChart.data.datasets[0].data = getDataForLastOneYear().salesData;
    myChart.update();
  });
  getDataForLastOneYear;
}

function getDataForLastOneYear() {
  monthsLabel = [];
  let monthsArray = [];
  let monthName = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  let d = new Date();
  d.setDate(1);
  for (i = 0; i <= 11; i++) {
    monthsArray.push(new Date(d));
    d.setMonth(d.getMonth() - 1);
  }

  monthsLabel = monthsArray.map(
    (month) =>
      `${monthName[new Date(month).getMonth()]} ${new Date(
        month
      ).getFullYear()}`
  );

  let data = [];

  monthsArray.forEach((day) => {
    let soldData = artistItemArray(artistName).filter((item) =>
      getMonthstoCompare(item.dateSold, day)
    );

    data.push(soldData);
  });
  salesDataforEachDay = [];
  data.forEach((array) => {
    let sales = 0;
    array.forEach((item) => {
      sales = sales + item.priceSold;
    });
    salesDataforEachDay.push(sales);
  });
  chartData = {
    dateLabel: monthsLabel,
    salesData: salesDataforEachDay,
  };
  return chartData;
}

function getLastDays(days) {
  let previousDays = [];
  let today = Date.parse(new Date());
  let oneDay = 86400000;

  for (let i = 0; days > i; i++) {
    let eachDay = oneDay * i;
    let previousDay = new Date(today - eachDay);
    previousDays.push(previousDay);
  }

  let lastDays = previousDays.map(
    (day) => `${day.toLocaleDateString("en-GB")}`
  );
  let data = [];

  previousDays.forEach((day) => {
    let soldData = artistItemArray(artistName).filter((item) =>
      getDatestoCompare(item.dateSold, day)
    );

    data.push(soldData);
  });
  salesDataforEachDay = [];
  data.forEach((array) => {
    let sales = 0;
    array.forEach((item) => {
      sales = sales + item.priceSold;
    });
    salesDataforEachDay.push(sales);
  });
  chartData = {
    dateLabel: lastDays,
    salesData: salesDataforEachDay,
  };

  return chartData;
}

function getMonthstoCompare(date1, date2) {
  dateOne = new Date(date1);
  dateTwo = new Date(date2);

  if (
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getFullYear() === dateTwo.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
}

function getDatestoCompare(date1, date2) {
  dateOne = new Date(date1);
  dateTwo = new Date(date2);

  if (
    dateOne.getDate() === dateTwo.getDate() &&
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getFullYear() === dateTwo.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
}

function getData() {
  return JSON.parse(localStorage.getItem("itemsData")) || data;
}

function saveData() {
  localStorage.setItem("itemsData", JSON.stringify(data));
}

function artistItemsPage() {
  let addItemForm = document.querySelector("#addItemForm");
  let openModalBtn = document.querySelector("#openModalBtn");
  let cancelBtn = document.querySelector("#cancelBtn");
  let cardContainer = document.querySelector("#artistsItems .card-container");
  let artistsItemsData = data.filter((item) => item.artist == artistName);
  let idx;
  let editMode = false;
  let isPublishedItem = document.querySelector("#isPublished");
  let itemTitle = document.querySelector("#itemTitle");
  let itemDescription = document.querySelector("#itemDescription");
  let itemType = document.querySelector("#itemType");

  itemTypes.forEach((type, idx) => {
    let option = document.createElement("option");
    if (idx === 0) {
      option.selected = true;
    }
    option.value = type;
    option.innerText = type;
    itemType.appendChild(option);
  });
  let itemPrice = document.querySelector("#itemPrice");
  let itemImage = document.querySelector("#itemImgUrl");

  const video = document.querySelector("#captureImagePage video");
  const canvas = document.querySelector("#camcanvas");
  const img = document.querySelector(".capturedImage");
  renderCards(artistsItemsData, cardContainer);
  cancelBtn.removeEventListener("click", openModal);
  cancelBtn.addEventListener("click", openModal);
  openModalBtn.removeEventListener("click", openModal);
  openModalBtn.addEventListener("click", openModal);
  addItemForm.removeEventListener("submit", addNewCard);
  addItemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewCard(e);
  });
  function addNewCard(e) {
    e.preventDefault;
    if (editMode) {
      data[idx].title = itemTitle.value;
      data[idx].description = itemDescription.value;
      data[idx].type = itemType.value;
      data[idx].image = itemImage.value;
      data[idx].price = itemPrice.value;
      data[idx].artist = artistName;
      data[idx].isPublished = isPublishedItem.checked;
      saveData();
      artistsItemsData = data.filter((item) => item.artist == artistName);
      renderCards(artistsItemsData, cardContainer);
      openModal(e);
      editMode = false;
    } else {
      let artistItem = {
        id: new Date().valueOf(),
        title: itemTitle.value,
        description: itemDescription.value,
        type: itemType.value,
        image: itemImage.value,
        price: itemPrice.value,
        artist: artistName,
        dateCreated: new Date().toString(),
        isPublished: isPublishedItem.checked ? true : false,
        isAuctioning: false,
        priceSold: 0,
      };
      data.push(artistItem);
      saveData();
      artistsItemsData = data.filter((item) => item.artist == artistName);
      renderCards(artistsItemsData, cardContainer);
      openModal(e);
    }
    stopStreamedVideo();
  }

  function createCard(array, item) {
    let card = document.createElement("div");
    card.classList.add("card");
    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img
    src=${item.image}
    alt="">`;
    cardImg.classList.add("card-img");
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.innerHTML = `
    <div class="left">
                <h3 class="title">${item.title}</h3>
                <span class="date">${getItemDate(item.dateCreated)}</span>
              </div>
              <div class="right">
                <span class="price">${item.price}$</span>
              </div>
    `;
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `<p>${item.description}</p>`;
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    let sendAuctionBtn = document.createElement("button");
    sendAuctionBtn.classList.add("sendToAuctionBtn");
    sendAuctionBtn.id = item.id;
    sendAuctionBtn.innerText = "Send to auction";
    if (
      item.priceSold ||
      data.filter((item) => item.isAuctioning == true).length >= 1
    ) {
      sendAuctionBtn.setAttribute("disabled", "");
    }
    let publishBtn = document.createElement("button");
    publishBtn.classList.add("publishBtn");
    publishBtn.id = item.id;
    if (item.isPublished) {
      publishBtn.innerText = "Unpublish";
    } else {
      publishBtn.innerText = "Publish";
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("removeBtn");
    deleteBtn.id = item.id;
    deleteBtn.innerText = "Remove";

    let editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.id = item.id;
    editBtn.innerText = "Edit";
    cardFooter.append(sendAuctionBtn, publishBtn, deleteBtn, editBtn);
    card.append(cardImg, cardHeader, cardBody, cardFooter);
    cardContainer.appendChild(card);

    sendAuctionBtn.removeEventListener("click", sendToAuction);
    sendAuctionBtn.addEventListener("click", sendToAuction);

    deleteBtn.removeEventListener("click", deleteCard);
    deleteBtn.addEventListener("click", deleteCard);

    publishBtn.removeEventListener("click", publishItem);
    publishBtn.addEventListener("click", publishItem);

    editBtn.addEventListener("click", onEditBtnClick);
    editBtn.addEventListener("click", onEditBtnClick);

    function publishItem(e) {
      e.preventDefault();
      idx = data.findIndex((item) => item.id == publishBtn.id);
      data[idx].isPublished = !data[idx].isPublished;
      saveData();
      renderCards(artistsItemsData, cardContainer);
    }
    function sendToAuction(e) {
      e.preventDefault();
      document.querySelector(".live-auctioning").style.display = "block";
      idx = data.findIndex((item) => item.id == sendAuctionBtn.id);
      data[idx].isAuctioning = true;
      saveData();
      renderCards(artistsItemsData, cardContainer);
    }
    function onEditBtnClick(e) {
      e.preventDefault();
      idx = data.findIndex((item) => item.id == editBtn.id);
      openModal(e);
      editMode = true;
      isPublishedItem.checked = data[idx].isPublished;
      itemTitle.value = data[idx].title;
      itemDescription.value = data[idx].description;
      itemType.value = data[idx].type;
      itemPrice.value = data[idx].price;
      itemImage.value = data[idx].image;
    }

    function deleteCard(e) {
      e.preventDefault();
      idx = data.findIndex((item) => item.id == deleteBtn.id);
      data.splice(idx, 1);
      artistsItemsData = data.filter((item) => item.artist == artistName);
      saveData();
      renderCards(artistsItemsData, cardContainer);
    }
  }

  function renderCards(array, container) {
    container.innerHTML = "";
    array.forEach((item) => {
      createCard(array, item);
    });
  }
  function getItemDate(date) {
    let selectedDate = new Date(date);
    return `${selectedDate.getDate()}.${
      selectedDate.getMonth() + 1
    }.${selectedDate.getFullYear()}`;
  }
  function openModal(e) {
    e.preventDefault();
    isPublishedItem.checked = true;
    itemTitle.value = "";
    itemDescription.value = "";
    itemType.value = "";
    itemPrice.value = "";
    itemImage.value = "";
    let addItemModal = document.querySelector(".add-new-item-modal");
    addItemModal.classList.toggle("d-none");
    cardContainer.classList.toggle("d-none");
    let snapshot = document.querySelector(".snapshot");
    snapshot.removeEventListener("click", startCamera);
    snapshot.addEventListener("click", startCamera);
    const img = document.querySelector(".capturedImage");
    img.src = "";
    let takesnapshot = document.querySelector(".takesnapshot");
    takesnapshot.classList.remove("d-none");
    document.querySelector("#itemImgUrl").value = "";
  }
  function startCamera() {
    let addItemModal = document.querySelector(".add-new-item-modal");
    addItemModal.classList.add("d-none");

    let captureImagePage = document.querySelector("#captureImagePage");
    captureImagePage.classList.remove("d-none");
    initCaptureImagePage();
  }
  function initCaptureImagePage() {
    const ssBtn = document.querySelector("#captureImagePage #screenShot");
    const selectVideos = document.querySelector("#captureImagePage #videos");

    ssBtn.removeEventListener("click", takePhoto);
    ssBtn.addEventListener("click", takePhoto);

    function takePhoto() {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      const imageURL = canvas.toDataURL("image/webp");
      img.src = imageURL;
      document.querySelector("#itemImgUrl").value = imageURL;
      let addItemModal = document.querySelector(".add-new-item-modal");
      addItemModal.classList.remove("d-none");
      let captureImagePage = document.querySelector("#captureImagePage");
      captureImagePage.classList.add("d-none");
      let takesnapshot = document.querySelector(".takesnapshot");
      takesnapshot.classList.add("d-none");
      let capturedImage = document.querySelector(".capturedImage");
      capturedImage.removeEventListener("click", takePhoto);
      capturedImage.addEventListener("click", takePhoto);
    }

    function getStream() {
      const source = selectVideos.value;

      const constrains = {
        video: {
          deviceId: source ? { exact: source } : undefined,
        },
      };

      return navigator.mediaDevices.getUserMedia(constrains).then(gotStream);
    }

    function gotStream(stream) {
      // console.log(stream.getVideoTracks()[0].id)
      // selectVideos.selectedIndex = [...selectVideos.options].findIndex(opt => opt)

      video.srcObject = stream;
    }

    function getDevices() {
      return navigator.mediaDevices.enumerateDevices();
    }

    function gotDevices(deviceInfo) {
      const videoDevices = deviceInfo.filter((x) => x.kind === "videoinput");

      for (let i = 0; i < videoDevices.length; i++) {
        const device = videoDevices[i];

        const opt = document.createElement("option");
        opt.value = device.deviceId;
        opt.text = `Camera ${i + 1} ${device.label || device.deviceId}`;
        selectVideos.appendChild(opt);
      }
    }

    function stopStreamedVideo(e) {
      const stream = video.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach(function (track) {
        track.stop();
      });

      video.srcObject = null;
    }

    getStream().then(getDevices).then(gotDevices);
  }

  function stopStreamedVideo(e) {
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(function (track) {
      track.stop();
    });

    video.srcObject = null;
  }
}

function onVisitorsPage() {
  document.querySelector(".logo-text").innerText = "Street ARTists";
  landingPageContainer.style.display = "none";
  visitorContainer.style.display = "block";
  visitorListingContainer.style.display = "none";
  artistsContainer.style.display = "none";
  artistsItemsContainer.style.display = "none";
  auctionContainer.style.display = "none";
  notFoundContainer.style.display = "none";
  // Menu
  auctionBtn.style.display = "block";
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.classList.add("d-flex");
  navMenuBtn.style.display = "none";
  navLogo.style.display = "block";
  logoContainer.classList.add("d-flex");
}

function onVisitorsListingPage() {
  document.querySelector(".logo-text").innerText = "Street ARTists";
  landingPageContainer.style.display = "none";
  visitorContainer.style.display = "none";
  visitorListingContainer.style.display = "block";
  artistsContainer.style.display = "none";
  artistsItemsContainer.style.display = "none";
  auctionContainer.style.display = "none";
  notFoundContainer.style.display = "none";
  // Menu
  auctionBtn.style.display = "block";
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.classList.add("d-flex");
  navMenuBtn.style.display = "none";
  navLogo.style.display = "block";
  logoContainer.classList.add("d-flex");
  userIsVisitor = true;
}

function visitorListingPage() {
  const publishedItems = data.filter((item) => item.isPublished == true);

  let visitorCardContainer = document.querySelector(
    "#visitorsListing .card-container"
  );
  const filterBtn = document.querySelector(".filterBtn");
  const closeBtn = document.querySelector(".filterPage .closeBtn");
  const applyBtn = document.querySelector(".applyBtn");

  applyBtn.removeEventListener("click", applyFilter);
  applyBtn.addEventListener("click", applyFilter);

  filterBtn.removeEventListener("click", openFilterModal);
  filterBtn.addEventListener("click", openFilterModal);

  closeBtn.removeEventListener("click", closeFilterModal);
  closeBtn.addEventListener("click", closeFilterModal);

  fetchUsersAndTypesforFilters();

  createVisitorCards(publishedItems);
  function createVisitorCards(array) {
    visitorCardContainer.innerHTML = "";
    array.forEach((item, idx) => {
      let card = document.createElement("div");

      card.classList.add("card");
      if (idx % 2 == 0) {
        card.classList.add("light");
      } else {
        card.classList.add("dark");
      }
      let cardImg = document.createElement("div");
      cardImg.innerHTML = `<img
      src=${item.image}
      alt="">`;
      cardImg.classList.add("card-img");
      let cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");
      cardHeader.innerHTML = `
      <div class="left">
      <h3 class="artist-name">${item.artist}</h3>
      
    </div>
    <div class="right">
      <span class="price">${item.price}$</span>
    </div>
      `;
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.innerHTML = `<p>${item.title}</p>
      <p>${item.description}</p>`;

      card.append(cardImg, cardHeader, cardBody);
      visitorCardContainer.appendChild(card);
    });
  }
  function openFilterModal() {
    const filterPage = document.querySelector(".filterPage");
    filterPage.classList.remove("d-none");
    visitorCardContainer.classList.add("d-none");
  }
  function closeFilterModal() {
    const filterPage = document.querySelector(".filterPage");
    filterPage.classList.add("d-none");
    visitorCardContainer.classList.remove("d-none");
  }

  function filteredData() {
    const filterbyTitle = document.querySelector("#filterbyTitle").value;
    const filterbyArtist = document.querySelector("#filterbyArtist").value;
    const filterbyMinPrice = document.querySelector("#filterbyMinPrice").value;
    const filterbyMaxPrice = document.querySelector("#filterbyMaxPrice").value;
    const filterbyType = document.querySelector("#filterbyType").value;
    let filteredItems = publishedItems.filter((item) => {
      return (
        (filterbyTitle ? item.title.includes(filterbyTitle) : true) &&
        (filterbyArtist ? item.artist === filterbyArtist : true) &&
        (filterbyMinPrice ? item.price >= filterbyMinPrice : true) &&
        (filterbyMaxPrice ? item.price <= filterbyMaxPrice : true) &&
        (filterbyType ? item.type === filterbyType : true)
      );
    });
    return filteredItems;
  }
  function applyFilter() {
    filteredItems = filteredData();
    createVisitorCards(filteredItems);
    closeFilterModal();
  }

  function fetchUsersAndTypesforFilters() {
    document.querySelector("#filterbyArtist").innerHTML = "";
    document.querySelector("#filterbyType").innerHTML = "";
    let itemType = document.createElement("option");
    itemType.setAttribute("value", ``);
    itemType.innerText = `Any type`;
    document.querySelector("#filterbyType").appendChild(itemType);
    itemTypes.forEach((type) => {
      let typeoption = document.createElement("option");
      typeoption.innerText = `${type}`;
      typeoption.setAttribute("value", `${type}`);
      document.querySelector("#filterbyType").appendChild(typeoption);
    });
    let username = document.createElement("option");
    username.setAttribute("value", ``);
    username.innerText = `All Artists`;
    document.querySelector("#filterbyArtist").appendChild(username);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((user) => {
          let username = document.createElement("option");
          username.innerText = `${user.name}`;
          username.setAttribute("value", `${user.name}`);
          document.querySelector("#filterbyArtist").appendChild(username);
        });
      });
  }
}

function onAuctionPage() {
  document.querySelector(".logo-text").innerText = "Street ARTists";
  landingPageContainer.style.display = "none";
  visitorContainer.style.display = "none";
  visitorListingContainer.style.display = "none";
  artistsContainer.style.display = "none";
  artistsItemsContainer.style.display = "none";
  auctionContainer.style.display = "block";
  notFoundContainer.style.display = "none";
  // Menu
  auctionBtn.style.display = "block";
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.classList.add("d-flex");
  navMenuBtn.style.display = "none";
  navLogo.style.display = "block";
  logoContainer.classList.add("d-flex");
  auctionPage();
}

function auctionPage() {
  timer = document.querySelector(".timer");
  let time;
  if (localStorage.getItem("auctionTimer") !== null) {
    time = +localStorage.getItem("auctionTimer");
  } else {
    time = 120;
    localStorage.setItem("auctionTimer", time);
    time = +localStorage.getItem("auctionTimer");
  }

  auctionInfo = document.querySelector(".auction-info");
  auctionCardContainer = document.querySelector("#auction .card-container");
  auctionActions = document.querySelector(".auction-action");

  bidAmountInput = document.querySelector("#bidAmount");
  confirmBidBtn = document.querySelector("#confirmBid");
  allBidsUl = document.querySelector(".all-bids-list");
  bidForm = document.querySelector("#bidForm");
  auctionCardContainer.innerHTML = "";
  auctionDone = document.querySelector(".auction-action h2");
  itemsOnAuction = data.filter((item) => item.isAuctioning);
  if (localStorage.getItem("userType") == "artist") {
    bidForm.style.display = "none";
  } else if (localStorage.getItem("noBid") !== null) {
    confirmBidBtn.disabled = true;
    bidAmountInput.value = "";
  } else {
    bidForm.style.display = "block";
  }

  if (itemsOnAuction.length >= 1) {
    document.querySelector(".live-auctioning").style.display = "block";

    auctionInfo.classList.add("d-none");
    auctionActions.classList.remove("d-none");
    auctionCardContainer.classList.remove("d-none");
    currentBiddingItem = itemsOnAuction[0];
    let initialBidPrice = Math.floor(itemsOnAuction[0].price / 2);
    bidAmountInput.min = initialBidPrice;
    itemsOnAuction.forEach((item) => {
      createCard(item);
      initAuctionPage();
    });
  } else {
    document.querySelector(".live-auctioning").style.display = "none";

    auctionInfo.classList.remove("d-none");
    auctionCardContainer.classList.add("d-none");
    auctionActions.classList.add("d-none");
  }

  function initAuctionPage() {
    currentBiddingItemIDX = data.findIndex(
      (item) => item.id === currentBiddingItem.id
    );
    let allBidsData;
    if (localStorage.getItem("allBidsData")) {
      allBidsData = JSON.parse(localStorage.getItem("allBidsData"));
      allBidsData.forEach((bid, idx) => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = `I bid ${bid}`;
        if (idx % 2 == 1) {
          li.classList.add("them");
        } else {
          li.classList.add("me");
        }
        li.appendChild(p);
        allBidsUl.append(li);

        bidAmountInput.setAttribute("min", +bid + 10);
        bidAmountInput.value = +bid + 10;
      });
    } else {
      allBidsData = [];
    }
    let timerInterval;
    function formatTime(seconds) {
      minutes = Math.floor(seconds / 60);
      remainingSeconds = seconds - minutes * 60;
      sDisplay =
        remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
      mDisplay = minutes < 10 ? `0${minutes}` : minutes;
      return `${mDisplay}: ${sDisplay}`;
    }

    function initTimer(time) {
      if (timerInterval) {
        clearInterval(timerInterval);
      }

      timer.innerText = `${formatTime(time)}`;

      timerInterval = setInterval(() => {
        if (time <= 0) {
          clearInterval(timerInterval);
          data[currentBiddingItemIDX].dateSold = new Date();
          data[currentBiddingItemIDX].priceSold =
            +allBidsData[allBidsData.length - 1];
          data[currentBiddingItemIDX].isAuctioning = false;
          bidForm.style.display = "none";
          auctionDone.style.display = "block";
          window.localStorage.removeItem("auctionTimer");
          window.localStorage.removeItem("allBidsData");
          window.localStorage.removeItem("noBid");
          saveData();

          return;
        }

        time--;
        localStorage.setItem("auctionTimer", time);

        timer.innerText = `${formatTime(time)}`;
      }, 1000);
    }
    function onBidHandler(e) {
      e.preventDefault();
      // apending my bids after click
      const li = document.createElement("li");
      li.classList.add("me");
      let p = document.createElement("p");
      p.innerText = `I bid ${bidAmountInput.value}`;
      li.appendChild(p);

      allBidsUl.appendChild(li);
      allBidsData.push(bidAmountInput.value);
      localStorage.setItem("allBidsData", JSON.stringify(allBidsData));

      // making bid request
      makeBid(bidAmountInput.value).then((data) => {
        const { isBidding, bidAmount } = data;

        // if is bidding == true
        if (isBidding) {
          initTimer(60);
          // appending their bid to the ul list
          const li = document.createElement("li");
          const p = document.createElement("p");
          p.innerText = `I bid ${bidAmount}`;
          li.classList.add("them");
          li.appendChild(p);
          allBidsUl.append(li);

          allBidsData.push(bidAmount);
          localStorage.setItem("allBidsData", JSON.stringify(allBidsData));

          bidAmountInput.setAttribute("min", bidAmount + 10);
          bidAmountInput.value = bidAmount + 10;
        } else {
          confirmBidBtn.setAttribute("disabled", "");
          const li = document.createElement("li");
          const p = document.createElement("p");
          p.innerText = `Ah... You won... I'm done`;
          li.classList.add("them");
          li.appendChild(p);
          allBidsUl.append(li);
          localStorage.setItem("noBid", "true");
        }
      });
    }
    initTimer(time);

    bidForm.removeEventListener("submit", onBidHandler);
    bidForm.addEventListener("submit", onBidHandler);
  }
  function makeBid(amount) {
    const url = "https://blooming-sierra-28258.herokuapp.com/bid";
    const data = { amount };

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "origin-when-cross-origin",
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  function createCard(item) {
    let card = document.createElement("div");

    card.classList.add("card", "dark");
    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img
        src=${item.image}
        alt="">`;
    cardImg.classList.add("card-img");
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.innerHTML = `
        <div class="left">
        <h3 class="artist-name">${item.artist}</h3>
        
      </div>
      <div class="right">
        <span class="price">${Math.floor(item.price / 2)}$</span>
      </div>
        `;
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `<p>${item.title}</p>
        <p>${item.description}</p>`;

    card.append(cardImg, cardHeader, cardBody);
    auctionCardContainer.appendChild(card);
  }
}