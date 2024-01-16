import requests
from bs4 import BeautifulSoup
import json

url = 'https://www.imdb.com/showtimes/cinema/AR/ci1036292/AR/X5220'

try:
    response = requests.get(url)
    response.raise_for_status()  # Verificar si la solicitud fue exitosa
    html = response.text

    soup = BeautifulSoup(html, 'html.parser')
    movies = soup.select('.list_item')

    data = []

    # Inicializa un contador para enumerar las películas
    movieCount = 1

    for index, movie in enumerate(movies, start=1):
        title = movie.select_one('.info h3 span[itemprop="name"] a').get_text(strip=True)

        # Omitir títulos que contienen '3D'
        if '3D' not in title:
            print(f'Película {movieCount}: {title}')

            showtimes = [time.get_text(strip=True) for time in movie.select('.list_item .info .showtimes')]

            print(f'Horarios: {", ".join(showtimes)}')
            print('------------------------------------------------')
            print('                                                ')

            # Aumenta el contador de películas
            movieCount += 1

            # Crear datos de película para exportar a JSON
            movie_data = {
                'id': index,
                'title': title,
                'horarios': showtimes
            }
            data.append(movie_data)

    # Exportar a JSON
    with open('granrex.json', 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=2)

except requests.exceptions.RequestException as e:
    print(f'Error en la solicitud HTTP: {e}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
