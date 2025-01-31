const slides = [
    {
      title:
        "إعلام عبري: تخوف إسرائيلي من حظر توريد الأسلحة عقب تحذيرات من مجاعة بغزة",
      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/6731207babf3b-621x396.jpeg",
    },
    {
      title:
        "تهم المقاولين الذاتيين والمتدربين.. أهم مقترحات الأغلبية لتعديل مشروع المالية",

      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/673203d9cb905-621x396.jpg",
    },
    {
      title: "قطار الصحراء وفن الطبخ.. مهرجان للترويج للسياحة بجهة الشرق",
      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/6731f245b58ab-621x396.jpeg",
    },
    {
      title:
        "“بيجيدي” يقترح رفع ضرائب “الشيشة” والشركات المحتكرة وسن إعفاءات لربات البيوت والأرامل",
      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/66dee8c7e681a-621x396.png",
    },
    {
      title:
        "أوجار: المغرب قوة عسكرية ضاربة ولن يسمح بجر المنطقة لحرب مفتوحة",
      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/670d5e32131e5-621x396.jpeg",
    },
    {
      title:
        "إعلام عبري: تخوف إسرائيلي من حظر توريد الأسلحة عقب تحذيرات من مجاعة بغزة",

      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/671fcaae99374-621x396.jpg",
    },
    {
      title:
        "قيوح يدافع عن “الخطافة” ويَعِد بتطوير السكك الحديدية والنقل الجوي لاستضافة المونديال",
      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/6731f4a3ef282-e1731327163649-621x396.jpg",
    },
    {
      title:
        "إعلام عبري: تخوف إسرائيلي من حظر توريد الأسلحة عقب تحذيرات من مجاعة بغزة",

      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/673238bbdcdf3-621x396.jpeg",
    },
    {
      title: "وفاة محمد المسيح.. “الحلقة” بساحة جامع الفنا تفقدُ أحد روادها",
      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/673326fb118f8-621x396.jpg",
    },
    {
      title:
        "إعلام عبري: تخوف إسرائيلي من حظر توريد الأسلحة عقب تحذيرات من مجاعة بغزة",
      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/673327f48121e-621x396.jpg",
    },
    {
      title:
        "إعلام عبري: تخوف إسرائيلي من حظر توريد الأسلحة عقب تحذيرات من مجاعة بغزة",
      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/6731207babf3b-621x396.jpeg",
    },
    {
      title:
        "إعلام عبري: تخوف إسرائيلي من حظر توريد الأسلحة عقب تحذيرات من مجاعة بغزة",
      description:
        "كشف إعلام عبري، السبت، عن قلق إسرائيلي من فرض عقوبات دولية عليه...",
      image: "images/6732351d4353e-621x396.jpg",
    },
  ];

  let currentSlide = 0;

  function renderSlide(slideIndex) {
    const titleElement = document.getElementById("slide-title");
    const descriptionElement = document.getElementById("slide-description");
    const imageElement = document.getElementById("slide-image");

    titleElement.textContent = slides[slideIndex].title;
    descriptionElement.textContent = slides[slideIndex].description;
    imageElement.src = slides[slideIndex].image;

    document.querySelectorAll(".page-number").forEach((page, index) => {
      page.classList.toggle("active", index === slideIndex);
    });
  }

  function changeSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    renderSlide(currentSlide);
  }

  document.querySelectorAll(".page-number").forEach((page, index) => {
    page.addEventListener("click", () => {
      currentSlide = index;
      renderSlide(currentSlide);
    });
  });


  renderSlide(currentSlide);

 
  setInterval(() => {
    changeSlide(1); 
  }, 3000); 


  $(document).ready(function () {
    $(".wish-icon i").click(function () {
      $(this).toggleClass("fa-heart fa-heart-o");
    });
  });


 const videos = [
  { url: 'https://www.youtube.com/embed/JscF1c67btM', thumbnail: 'images/6717b5f55e182-150x84.png', title: 'رئيس حزب موريتاني: حضور المملكة بالمغرب الكبير مركزي تاريخيا وجغرافيا وموضوعيا' },
  { url: 'https://www.youtube.com/embed/E6DDWycARaA', thumbnail: 'images/6717c6a49b6f7-340x240.png', title: 'السنتيسي:الاعتراف الفرنسي بمغربية الصحراء ثمرة 25 سنة من دبلوماسية الملك وماكرون أقر بفضل المغاربة' },
  { url: 'https://www.youtube.com/embed/4YuFwjTGGa8', thumbnail: 'images/6731f4a3ef282-e1731327163649-621x396.jpg', title: 'الموقف الفرنسي/ كلفة الاعتراف/الخصوم/متطلبات المرحلة..بيد الله يشخص حال ومآل ملف الصحراء مع_بلهيسي' },
  { url: 'https://www.youtube.com/embed/42U7eTRFLkw', thumbnail: 'images/6581917bb2685-400x300.jpg', title: 'الطوزي: الأحزاب ذات المرجعية الصلبة تواكب الحكم بإنتاج إيديولوجي وهو ما افتقر إليه العدالة والتنمية' },
  { url: 'https://www.youtube.com/embed/JscF1c67btM', thumbnail: 'images/6717b5f55e182-150x84.png', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/E6DDWycARaA', thumbnail: 'images/6717c6a49b6f7-340x240.png', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/4YuFwjTGGa8', thumbnail: 'images/6731f4a3ef282-e1731327163649-621x396.jpg', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/42U7eTRFLkw', thumbnail: 'images/6581917bb2685-400x300.jpg', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/JscF1c67btM', thumbnail: 'images/6717b5f55e182-150x84.png', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/E6DDWycARaA', thumbnail: 'images/6717c6a49b6f7-340x240.png', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/4YuFwjTGGa8', thumbnail: 'images/6731f4a3ef282-e1731327163649-621x396.jpg', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/42U7eTRFLkw', thumbnail: 'images/6581917bb2685-400x300.jpg', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/JscF1c67btM', thumbnail: 'images/6717b5f55e182-150x84.png', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/E6DDWycARaA', thumbnail: 'images/6717c6a49b6f7-340x240.png', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/4YuFwjTGGa8', thumbnail: 'images/6731f4a3ef282-e1731327163649-621x396.jpg', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/42U7eTRFLkw', thumbnail: 'images/6581917bb2685-400x300.jpg', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/JscF1c67btM', thumbnail: 'images/6717b5f55e182-150x84.png', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/E6DDWycARaA', thumbnail: 'images/6717c6a49b6f7-340x240.png', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/4YuFwjTGGa8', thumbnail: 'images/6731f4a3ef282-e1731327163649-621x396.jpg', title: 'عنوان الفيديو المصغر الأول' },
  { url: 'https://www.youtube.com/embed/42U7eTRFLkw', thumbnail: 'images/6581917bb2685-400x300.jpg', title: 'عنوان الفيديو المصغر الأول' },,

];

const thumbnailsToShow = 4; 
let currentIndex = 0; 
let autoSlideInterval; 


function displayThumbnails() {
  const thumbnailContainer = document.getElementById('thumbnailContainer');


      
  thumbnailContainer.innerHTML = '';

  for (let i = currentIndex; i < currentIndex + thumbnailsToShow && i < videos.length; i++) {
    const video = videos[i];
    const div = document.createElement('div');
      div.innerHTML = ` <img src="${video.thumbnail}" alt="Thumbnail 1" />
        <a href="#" class="a-white text-center mb-0 position-absolute w-100 text-white h-50 p-4" style="bottom: 0;display: flex;align-items: end; background: linear-gradient(180deg, rgba(66, 66, 66, 0) 0.01%, rgba(22, 22, 22, 0.660881) 20%, rgba(10, 10, 10, 0.850558) 34.5%, #000000 71%);
">${video.title}</a>`;
      div.className = 'thumbnail-item position-relative thumbnail col-3';
      div.onclick = () => updateVideo(video.url, video.title);
      

      
      thumbnailContainer.appendChild(div);

  }

  updatePagination();
}


function updateVideo(videoUrl, videoTitle) {
  document.getElementById('mainVideo').src = videoUrl;
  document.getElementById('main-text').innerHTML = videoTitle;
}


function updatePagination() {
  const totalPages = videos.length - thumbnailsToShow + 1; 
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  for (let i = 0; i < totalPages; i++) {
    const li = document.createElement('li');
    li.className = 'page-item ' + (i === currentIndex ? 'active' : '');
    const a = document.createElement('a');
    a.className = 'page-link';
    a.href = '#';
    a.innerText = i + 1;
    a.onclick = (e) => {
      e.preventDefault();
      goToPage(i);
    };
    li.appendChild(a);
    pagination.appendChild(li);
  }
}


function goToPage(index) {
  currentIndex = index;
  displayThumbnails();
}


function prevPage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = videos.length - thumbnailsToShow;
  }
  displayThumbnails();
}


function nextPage() {
  if (currentIndex < videos.length - thumbnailsToShow) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  displayThumbnails();
}


function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextPage();
  }, 100000); 
}


function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

displayThumbnails();
startAutoSlide();

document.querySelectorAll('.pagination a, .pagination-controls button').forEach((el) => {
  el.addEventListener('click', stopAutoSlide);
});
