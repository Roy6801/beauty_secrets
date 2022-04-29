from selenium import webdriver
from selenium.webdriver.common.by import By
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())

url = "https://www.google.com/maps/place/Beauty+Secrets+Family+Salon/@19.0694943,72.9995624,17z/data=!4m7!3m6!1s0x3be7c1bab0faacf3:0x65e579b1e2ad2da1!8m2!3d19.0694943!4d73.0017511!9m1!1b1"

options = webdriver.ChromeOptions()
# /app/.apt/usr/bin/google-chrome
options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")
options.add_argument("--incognito")
options.add_argument("--headless")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--no-sandbox")
options.add_argument('--log-level=3')


def fetch(filter=3):
    driver = webdriver.Chrome(
        executable_path=os.environ.get("CHROMEDRIVER_PATH"),
        chrome_options=options)

    driver.get(url)

    # jJc9Ad
    profileURLS = driver.find_elements(By.CLASS_NAME, "NBa7we")
    profileNames = driver.find_elements(By.CLASS_NAME, "d4r55")
    stars = driver.find_elements(By.CLASS_NAME, "kvMYJc")
    reviewTexts = driver.find_elements(By.CLASS_NAME, "wiI7pd")
    avg_rating = driver.find_element(By.CLASS_NAME, "fontDisplayLarge").text

    profileURLS = [
        profileurl.get_attribute("src") for profileurl in profileURLS
    ]
    profileNames = [names.text for names in profileNames]
    stars = [
        int(star.get_attribute("aria-label").split(" ")[1]) for star in stars
    ]
    reviewTexts = [
        text.text for text in reviewTexts if text.tag_name == "span"
    ]

    userReviews = {
        profileurl: (name, star, text)
        for profileurl, name, star, text in zip(
            profileURLS, profileNames, stars, reviewTexts) if star >= filter
    }

    responseObj = {"avgRating": avg_rating, "userReviews": userReviews}

    return responseObj
