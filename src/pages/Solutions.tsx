import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const solutions = [
  {
    id: 'sturgeon',
    title: 'Осётр',
    subtitle: 'Премиум',
    price: 'от 700 ₽/кг',
    caviarPrice: 'икра до 30 000 ₽/кг',
    segment: 'Рестораны, премиум-рынок, экспорт',
    feature: 'Высокая маржинальность, статусный бизнес',
    payback: '24-36 месяцев',
    risk: 'Низкий',
    profit: 'Очень высокий',
    image: '/img/6cb509b1-efef-4366-9fe8-2f9cbd7ce8c8.jpg',
    icon: '🐟',
    color: 'bg-gradient-to-br from-yellow-500 to-yellow-700'
  },
  {
    id: 'trout',
    title: 'Форель',
    subtitle: 'Стабильный спрос',
    price: '400–500 ₽/кг',
    segment: 'Ритейл и HoReCa',
    feature: 'Надёжный спрос круглый год',
    payback: '18-24 месяца',
    risk: 'Очень низкий',
    profit: 'Высокий',
    image: '/img/ff65301d-7e37-4c75-995f-2c4e7aa688b5.jpg',
    icon: '🐟',
    color: 'bg-gradient-to-br from-blue-500 to-blue-700'
  },
  {
    id: 'catfish',
    title: 'Клариевый сом',
    subtitle: 'Быстрый старт',
    price: '300–350 ₽/кг',
    segment: 'Региональные рынки, HoReCa',
    feature: 'Быстрый рост, минимальные риски',
    payback: '8-12 месяцев',
    risk: 'Средний',
    profit: 'Средний/высокий',
    image: '/img/e6b22072-aa5e-4450-b2bc-bf0999903e27.jpg',
    icon: '🐟',
    color: 'bg-gradient-to-br from-green-500 to-green-700'
  }
];

const includedServices = [
  {
    icon: 'Drafting',
    title: 'Проектирование УЗВ',
    description: 'Индивидуальный проект с учётом специфики участка и бизнес-целей'
  },
  {
    icon: 'Settings',
    title: 'Поставка и монтаж оборудования',
    description: 'Комплексная установка всех систем УЗВ под ключ'
  },
  {
    icon: 'GraduationCap',
    title: 'Обучение персонала',
    description: 'Полная подготовка команды для работы с УЗВ системами'
  },
  {
    icon: 'FileText',
    title: 'Бизнес-план и расчёты',
    description: 'Детальный финансовый план с прогнозами доходности'
  },
  {
    icon: 'Headphones',
    title: 'Поддержка и сервис',
    description: '24/7 техническая поддержка и регулярное обслуживание'
  }
];

const cases = [
  {
    title: 'Ферма "АкваПремиум"',
    type: 'Осетровое хозяйство',
    region: 'Московская область',
    investment: '12 млн ₽',
    payback: '28 месяцев',
    yearlyProfit: '6.8 млн ₽',
    quote: 'Вышли на проектную мощность за 8 месяцев. Икра пользуется огромным спросом.',
    image: '/img/6cb509b1-efef-4366-9fe8-2f9cbd7ce8c8.jpg'
  },
  {
    title: 'ООО "АльпинФиш"',
    type: 'Форелевое хозяйство',
    region: 'Краснодарский край',
    investment: '4.2 млн ₽',
    payback: '19 месяцев',
    yearlyProfit: '2.1 млн ₽',
    quote: 'Стабильные поставки в сети ресторанов. Планируем расширение.',
    image: '/img/ff65301d-7e37-4c75-995f-2c4e7aa688b5.jpg'
  },
  {
    title: '"РегионАква"',
    type: 'Выращивание сома',
    region: 'Ростовская область',
    investment: '2.8 млн ₽',
    payback: '11 месяцев',
    yearlyProfit: '1.4 млн ₽',
    quote: 'Самая быстрая окупаемость среди наших проектов. Рекомендуем!',
    image: '/img/e6b22072-aa5e-4450-b2bc-bf0999903e27.jpg'
  }
];

const faqData = [
  {
    question: 'Какая рыба самая выгодная?',
    answer: 'Это зависит от ваших целей. Осётр дает максимальную прибыль, но требует больших инвестиций. Форель - золотая середина со стабильным спросом. Сом - быстрый старт с минимальными рисками.'
  },
  {
    question: 'Можно ли совмещать несколько видов?',
    answer: 'Да, многие наши клиенты успешно выращивают 2-3 вида рыб в одном хозяйстве. Это снижает риски и позволяет работать с разными сегментами рынка.'
  },
  {
    question: 'Что с рынком сбыта?',
    answer: 'Мы помогаем с поиском каналов сбыта. У нас есть партнёрства с ритейлом, ресторанами и оптовыми покупателями. Также предоставляем маркетинговую поддержку.'
  },
  {
    question: 'Какие гарантии вы даёте?',
    answer: 'Гарантия на оборудование - 2 года, поддержка первого года работы включена в стоимость. Если проект не достигнет заявленных показателей по нашей вине - компенсируем разницу.'
  }
];

export default function Solutions() {
  const [selectedFish, setSelectedFish] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fishType: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            УЗВ бизнес - готовые решения
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Надежные стратегии — от быстрого запуска до чистой прибыли. 
            Выберите решение, которое подходит именно вам
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            <Icon name="Search" size={20} className="mr-2" />
            Подобрать решение
          </Button>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Наш подход</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Каждое решение включает оборудование, технологию, обучение и поддержку. 
              Вы получаете не просто установку, а готовый УЗВ бизнес под ключ
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Settings', title: 'Оборудование', desc: 'Современные УЗВ системы' },
              { icon: 'FileText', title: 'Бизнес-план', desc: 'Готовая стратегия развития' },
              { icon: 'GraduationCap', title: 'Обучение', desc: 'Подготовка персонала' },
              { icon: 'Headphones', title: 'Поддержка до продаж', desc: '24/7 сервис и консультации' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Catalog */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог решений</h2>
            <p className="text-lg text-muted-foreground">3 пакета по видам рыб для разных бизнес-целей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${solution.color} text-white font-semibold`}>
                      {solution.subtitle}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-2xl">{solution.icon}</span>
                    {solution.title}
                  </CardTitle>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Цена:</span> {solution.price}</p>
                    {solution.caviarPrice && (
                      <p><span className="font-semibold">Икра:</span> {solution.caviarPrice}</p>
                    )}
                    <p><span className="font-semibold">Сегмент:</span> {solution.segment}</p>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                    <div>
                      <span className="text-muted-foreground">Особенность:</span>
                      <p className="font-semibold text-sm">{solution.feature}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Срок окупаемости:</span>
                      <p className="font-semibold text-sm">{solution.payback}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <Button className="flex-1 bg-primary hover:bg-primary/90" size="sm">
                      {solution.id === 'sturgeon' ? 'Рассчитать доходность проекта' : 
                       solution.id === 'trout' ? 'Получить бизнес-план по форели' : 
                       'Заказать расчёт'}
                    </Button>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Сравнительная таблица решений</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-4 text-left font-semibold">Вид рыбы</th>
                  <th className="border p-4 text-left font-semibold">Сегмент</th>
                  <th className="border p-4 text-left font-semibold">Средняя цена</th>
                  <th className="border p-4 text-left font-semibold">Срок окупаемости</th>
                  <th className="border p-4 text-left font-semibold">Уровень риска</th>
                  <th className="border p-4 text-left font-semibold">Потенциал прибыли</th>
                </tr>
              </thead>
              <tbody>
                {solutions.map((solution) => (
                  <tr key={solution.id} className="hover:bg-muted/50">
                    <td className="border p-4 font-semibold">{solution.title}</td>
                    <td className="border p-4">{solution.segment}</td>
                    <td className="border p-4">{solution.price}</td>
                    <td className="border p-4">{solution.payback}</td>
                    <td className="border p-4">
                      <Badge variant={solution.risk === 'Низкий' ? 'default' : solution.risk === 'Очень низкий' ? 'secondary' : 'destructive'}>
                        {solution.risk}
                      </Badge>
                    </td>
                    <td className="border p-4">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {solution.profit}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать полное сравнение в PDF
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что включено в каждое решение</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {includedServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Истории успеха наших клиентов</h2>
            <p className="text-lg text-muted-foreground">Реальные результаты тех, кто уже запустил УЗВ бизнес</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={case_.image} 
                    alt={case_.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{case_.title}</h3>
                    <p className="text-sm opacity-90">{case_.type}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Инвестиции:</span>
                      <p className="font-semibold">{case_.investment}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Окупаемость:</span>
                      <p className="font-semibold">{case_.payback}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Годовая прибыль:</span>
                      <p className="font-semibold text-green-600">{case_.yearlyProfit}</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic text-muted-foreground mb-4 border-l-2 border-primary pl-4">
                    "{case_.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть больше кейсов
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Хотите узнать, какое решение подойдёт именно вам?
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку и получите персональный расчёт доходности для вашего проекта
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Выберите рыбу *</label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, fishType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Какую рыбу планируете выращивать?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sturgeon">🐟 Осётр (Премиум)</SelectItem>
                      <SelectItem value="trout">🐟 Форель (Стабильный спрос)</SelectItem>
                      <SelectItem value="catfish">🐟 Клариевый сом (Быстрый старт)</SelectItem>
                      <SelectItem value="mixed">Комбинированное решение</SelectItem>
                      <SelectItem value="unsure">Пока не определился</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Получить персональный расчёт
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы начать свой УЗВ бизнес?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами сегодня и получите консультацию эксперта
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}