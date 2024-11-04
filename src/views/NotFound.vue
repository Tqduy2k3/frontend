<template>
    <div class="not-found">
        <div class="not-found-content">
            <div class="cloud"></div>
            <h1 class="animated-404">404</h1>
            <p>Page not found.CBC HET IS STUCK!!!11!!1!! </p>
            <p>
                Back
                <router-link to="/" class="home-link">
                    Home
                </router-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
.not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e0f7fa;
    color: #333;
    font-family: Arial, sans-serif;
    overflow: hidden;
}

.not-found-content {
    text-align: center;
    max-width: 500px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    position: relative;
}

.animated-404 {
    font-size: 6em;
    margin: 0;
    color: #ff6b6b;
    animation: floating 3s ease-in-out infinite, shake 1s ease-in-out infinite alternate;
}

.not-found-content p {
    font-size: 1.2em;
    margin: 10px 0;
}

.home-link {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
}

.home-link:hover {
    text-decoration: underline;
}

/* Keyframes cho hiệu ứng nhấp nhô */
@keyframes floating {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

/* Keyframes cho hiệu ứng rung lắc nhẹ */
@keyframes shake {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
    75% { transform: rotate(-2deg); }
    100% { transform: rotate(0deg); }
}

/* Đám mây di chuyển */
.cloud {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 80px;
    background: #b3e5fc;
    border-radius: 50%;
    box-shadow: -30px 30px 0 -10px #b3e5fc, 30px 30px 0 -10px #b3e5fc;
    animation: cloud-move 5s linear infinite;
}

@keyframes cloud-move {
    0% { transform: translateX(-100px); }
    50% { transform: translateX(100px); }
    100% { transform: translateX(-100px); }
}
</style>
