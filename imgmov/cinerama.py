import requests
from bs4 import BeautifulSoup
import json

url = 'https://boleteriacinerama.com.ar/'

try:
    response = requests.get(url)
    response.raise_for_status()  # Verificar si la solicitud fue exitosa
    html = response.text

    soup = BeautifulSoup(html, 'html.parser')
    movies = soup.select('.movie__about')

    data = []

    for index, movie in enumerate(movies, start=1):
        title = movie.select_one('.movie__title').get_text(strip=True)

        # Omitir títulos que contienen '3D'
        if '3D' not in title:
            showtimes = [time.get_text(strip=True) for time in movie.select('table tr:not(:first-child) td:first-child')]
            
            movie_data = {
                'id': index,
                'title': title,
                'horarios': showtimes
            }
            data.append(movie_data)

    # Exportar a JSON
    with open('cinerama.json', 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=2)

except requests.exceptions.RequestException as e:
    print(f'Error en la solicitud HTTP: {e}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
