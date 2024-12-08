"use strict";
function getDeviceInfo() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const platform = navigator.platform || 'Unknown';
    let deviceType = 'Desktop';
    let os = 'Unknown OS';
    let browser = 'Unknown Browser';
    let brand = null;
    // Determine the device type
    if (/Mobi|Android/i.test(userAgent)) {
        deviceType = 'Mobile';
    }
    else if (/Tablet|iPad/i.test(userAgent)) {
        deviceType = 'Tablet';
    }
    else if (!/Mobi|Android|Tablet|iPad|iPhone/i.test(userAgent)) {
        deviceType = 'Desktop';
    }
    // Determine the operating system
    if (/Windows NT/i.test(userAgent)) {
        os = 'Windows';
    }
    else if (/Mac OS/i.test(userAgent)) {
        os = 'Mac OS';
    }
    else if (/Android/i.test(userAgent)) {
        os = 'Android';
    }
    else if (/Linux/i.test(userAgent)) {
        os = 'Linux';
    }
    else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        os = 'iOS';
    }
    // Determine the browser
    if (/Chrome\/\d+/.test(userAgent) && !/Edge|Edg/i.test(userAgent)) {
        browser = 'Chrome';
    }
    else if (/Safari\/\d+/.test(userAgent) && !/Chrome|CriOS/i.test(userAgent)) {
        browser = 'Safari';
    }
    else if (/Firefox\/\d+/.test(userAgent)) {
        browser = 'Firefox';
    }
    else if (/Edg\/\d+/.test(userAgent)) {
        browser = 'Edge';
    }
    else if (/MSIE|Trident/i.test(userAgent)) {
        browser = 'Internet Explorer';
    }
    // Determine brand if mobile
    if (deviceType === 'Mobile' || deviceType === 'Tablet') {
        if (/Samsung/i.test(userAgent)) {
            brand = 'Samsung';
        }
        else if (/iPhone|iPad/i.test(userAgent)) {
            brand = 'Apple';
        }
        else if (/Huawei/i.test(userAgent)) {
            brand = 'Huawei';
        }
        else if (/Xiaomi/i.test(userAgent)) {
            brand = 'Xiaomi';
        }
        else if (/OnePlus/i.test(userAgent)) {
            brand = 'OnePlus';
        }
        else if (/Oppo/i.test(userAgent)) {
            brand = 'Oppo';
        }
        else if (/Vivo/i.test(userAgent)) {
            brand = 'Vivo';
        }
    }
    return {
        deviceType,
        browser,
        os,
        platform,
        userAgent,
        brand,
    };
}
// Usage
const deviceInfo = getDeviceInfo();
console.log('Device Info:', deviceInfo);
// Display details
const infoElement = document.getElementById('pre');
infoElement.textContent = JSON.stringify(deviceInfo, null, 2);
document.getElementById("btn")?.addEventListener("click", () => {
    load();
});
function load() {
    let url = "";
    switch (deviceInfo.deviceType) {
        case "Desktop":
            url = "./desktop/desktopindex.html";
            break;
        case "Tablet":
            url = "./tablet/tabletindex.html";
            break;
        case "Mobile":
            url = "./mobile/mobileindex.html";
            break;
        default:
            console.log(deviceInfo);
            break;
    }
    window.location.replace(url);
}
