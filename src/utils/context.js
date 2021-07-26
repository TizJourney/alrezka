
const tel = '+7 (812) 309-27-80';
const telSupport = '+7 (964) 394-41-57';

export const CONTACTS = {
    tel: tel,
    telRaw: tel.replace(/[^0-9]/g, ''),
    telSupport: telSupport,
    telSupportRaw: telSupport.replace(/[^0-9]/g, ''),
    email: 'zakaz@alrezka.ru'
}

export const ADDRESS = [
    'ООО «Алрезка»',
    '194292, РФ, г.Санкт-Петербург, 2-й Верхний пер., д. 5, лит. И, пом. 4-Н',
    'ИНН/КПП  7802633184 / 780201001',
    'р/с 40702810732260003600 в филиале «Санкт-Петербургский» АО «Альфа Банк, г.Санкт-Петербург',
    'к/ч 30101810600000000786, БИК 044030786',
]

export const FEEDBACK = {
    yandex: 'https://yandex.ru/maps/-/CCUiUJAOGB',
    google: 'https://goo.gl/maps/Gxs8xPcCNSift8Di8',
}

export const PROMO = 'Компания Алрезка – строительная компания, основной специализацией которой является алмазная резка и бурение железобетонных конструкций.';

export const FACTS = [
    'Основана в 2011 году.',
    'Количество реализованных объектов – более 1000. ',
    'Действующая клиентская база – более 1800 организаций',
    'Парк оборудования состоит из стенорезных/канатных машин Cedina/Hilti, шоврезчиков Tyrolit, бурильные моторы Bender/Hilti.',
    'Производственные мощности  - более 1 000 куб.м. железобетона/месяц.',
    'Работает по всей территории РФ.',
]

export const SERVICES = [
    'Алмазная резка железобетонных конструкций любой конфигурации и толщины',
    'Алмазное бурение отверстий (диаметр от 12мм до 600мм)',
    'Сварочные работы (усиление проемов металлоконструкциями в жилищном секторе)',
]

export const CLIENTS = [
    {
        'Промышленные предприятия' : [
            'Непосредственно промышленные предприятия',
            'Строительно-монтажные  организации, выполняющие работы на промышленных предприятиях',
        ],
    },
    {
        'Генеральные подрядчики, инвесторы, заказчики': [
            'Коммерческая недвижимость',
            'Торгово-развлекательные центры',
            'Жилищное строительство',
            'Объекты инфраструктуры',
        ],
    },
    {
        'Строительные  и монтажные организации': [
            'HVAC/электромонтаж',
            'Наружные инженерные коммуникации',
            'Реконструкции/капитальный ремонт',
        ],
    },
    {
        'Частные лица': [],
        'Дизайнерские студии': [],
        'Компании, выполняющие ремонт в жилищном строительстве': [],
        'Проектировщики': [],
    }
]

export const ADVANTAGES = [
    'Высокопрофессиональный штат сотрудников',
    'Большой парк оборудования',
    'Опыт решения сложнейших инженерных задач',
    'Гибкая ценовая политика',
    'Рекомендации ведущих игроков',
    'Инженерное сопровождение',
]
