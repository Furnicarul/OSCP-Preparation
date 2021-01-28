from pwn import *
import requests
import re
from bs4 import BeautifulSoup
import hashlib

url = "http://46.101.16.203:32211/"

#headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'}

#requestJar = requests.cookies.RequestsCookieJar()
#requestJar.set("PHPSESSID", "bj81pd24s23frg5eb9v25b9i80")

with requests.Session() as s:
        r = s.get(url)
        print(r.text)
        soup = BeautifulSoup(r.content, 'html5lib')
        hash = soup.find('h3')
        hash_data = hash.text
        log.info(hash_data)

        mdHash = hashlib.md5(hash_data).hexdigest()
        log.info(mdHash)

        data = dict(hash=mdHash)
        rpost = s.post(url, data=data)
        print(rpost.text)
