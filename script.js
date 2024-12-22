function submitMessage() {
  const feelings = document.getElementById('feelings').value;
  const response = document.getElementById('response');
  
  if (feelings) {
    response.textContent = `Cảm ơn em đã chia sẻ cảm xúc của mình! Anh cũng yêu em rất nhiều và mong rằng chúng ta sẽ cùng nhau viết tiếp câu chuyện tình yêu này! 💖`;
    response.style.color = '#ff1493';
    document.getElementById('feelings').value = '';
  } else {
    response.textContent = 'Vui lòng chia sẻ cảm xúc của em với anh nhé!';
    response.style.color = '#fff';
  }
}

// Thêm hiệu ứng động lung linh
document.body.style.animation = "fadeIn 3s ease-out";

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
