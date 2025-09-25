import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface FishSolution {
  id: string;
  name: string;
  emoji: string;
  segment: string;
  price: string;
  feature: string;
  payback: string;
  risk: string;
  profit: string;
  image: string;
}

const fishSolutions: FishSolution[] = [
  {
    id: 'sturgeon',
    name: 'Осётр',
    emoji: '🐟',
    segment: 'рестораны, премиум-рынок, экспорт',
    price: 'от 700 ₽/кг, икра — до 30 000 ₽/кг',
    feature: 'высокая маржинальность, статусный бизнес',
    payback: '18-24 месяца',
    risk: 'Низкий',
    profit: 'Очень высокий',
    image: '/img/325d6147-53fd-43af-b148-bc313ecb9490.jpg'
  },
  {
    id: 'trout',
    name: 'Форель',
    emoji: '🐟',
    segment: 'ритейл и HoReCa',
    price: '400–500 ₽/кг',
    feature: 'надёжный спрос круглый год',
    payback: '12-15 месяцев',
    risk: 'Очень низкий',
    profit: 'Высокий',
    image: '/img/164d1e97-0985-4147-a161-9535b9f8d46f.jpg'
  },
  {
    id: 'catfish',
    name: 'Клариевый сом',
    emoji: '🐟',
    segment: 'региональные рынки, HoReCa',
    price: '300–350 ₽/кг',
    feature: 'быстрый рост, минимальные риски',
    payback: '8-12 месяцев',
    risk: 'Средний',
    profit: 'Средний/высокий',
    image: '/img/fc7ee23e-b84d-44c3-a0d3-0d72876b37c9.jpg'
  }
];

function Index() {
  const [selectedFish, setSelectedFish] = useState<string>('sturgeon');
  const [investment, setInvestment] = useState<number>(5000000);
  const [period, setPeriod] = useState<number>(24);

  const calculateROI = (fishType: string, investmentAmount: number, months: number) => {
    const baseROI = {
      sturgeon: 0.45, // 45% годовых
      trout: 0.35,    // 35% годовых  
      catfish: 0.40   // 40% годовых
    }[fishType] || 0.40;

    const monthlyROI = baseROI / 12;
    const totalReturn = investmentAmount * (1 + monthlyROI * months);
    const profit = totalReturn - investmentAmount;
    
    return {
      totalReturn: Math.round(totalReturn),
      profit: Math.round(profit),
      monthlyIncome: Math.round(profit / months),
      roi: Math.round(((totalReturn - investmentAmount) / investmentAmount * 100))
    };
  };

  const currentCalculation = calculateROI(selectedFish, investment, period);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Fish" size={32} className="text-primary" />
              <span className="text-xl font-bold text-primary">УЗВ Инвест</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-foreground hover:text-primary transition-colors">Решения</a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
              <a href="#comparison" className="text-foreground hover:text-primary transition-colors">Сравнение</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                УЗВ бизнес - готовые решения
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Надежные стратегии — от быстрого запуска до чистой прибыли. 
                Выберите решение, которое подходит именно вам.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Подобрать решение
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/fc7ee23e-b84d-44c3-a0d3-0d72876b37c9.jpg" 
                alt="УЗВ оборудование" 
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Approach */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наш подход</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Каждое решение включает оборудование, технологию, обучение и поддержку. 
              Вы получаете не просто установку, а готовый УЗВ бизнес под ключ.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Wrench', title: 'Оборудование', desc: 'Полная комплектация УЗВ системы' },
              { icon: 'FileText', title: 'Бизнес-план', desc: 'Детальные расчеты доходности' },
              { icon: 'GraduationCap', title: 'Обучение', desc: 'Подготовка персонала' },
              { icon: 'Headphones', title: 'Поддержка', desc: '24/7 техническая поддержка' }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Калькулятор доходности</h2>
            <p className="text-lg text-muted-foreground">Рассчитайте потенциальную прибыль от вашего УЗВ проекта</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Параметры инвестиции</CardTitle>
                <CardDescription>Укажите ваши планы по инвестированию</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="fish-type">Вид рыбы</Label>
                  <Select value={selectedFish} onValueChange={setSelectedFish}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {fishSolutions.map(fish => (
                        <SelectItem key={fish.id} value={fish.id}>
                          {fish.emoji} {fish.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="investment">Размер инвестиций (руб.)</Label>
                  <Input
                    id="investment"
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    step="100000"
                    min="1000000"
                    max="50000000"
                  />
                </div>

                <div>
                  <Label htmlFor="period">Период расчета (месяцев)</Label>
                  <Input
                    id="period"
                    type="number"
                    value={period}
                    onChange={(e) => setPeriod(Number(e.target.value))}
                    min="6"
                    max="60"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Прогноз доходности</CardTitle>
                <CardDescription>Расчет основан на средних показателях рынка</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-muted-foreground">Общий доход:</span>
                    <span className="font-bold text-lg">
                      {currentCalculation.totalReturn.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-secondary/10 rounded-lg">
                    <span className="text-muted-foreground">Чистая прибыль:</span>
                    <span className="font-bold text-lg text-secondary">
                      {currentCalculation.profit.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                    <span className="text-muted-foreground">Ежемесячный доход:</span>
                    <span className="font-bold text-lg text-primary">
                      {currentCalculation.monthlyIncome.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-muted-foreground">ROI:</span>
                    <span className="font-bold text-xl text-green-600">
                      {currentCalculation.roi}%
                    </span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать подробный расчет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fish Solutions Catalog */}
      <section id="solutions" className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Каталог решений</h2>
            <p className="text-lg text-muted-foreground">Выберите оптимальный вариант для вашего бизнеса</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fishSolutions.map((solution) => (
              <Card key={solution.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={solution.image} 
                    alt={solution.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {solution.emoji} {solution.name}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{solution.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{solution.segment}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-xs text-muted-foreground">Цена рыбы:</span>
                      <p className="font-semibold">{solution.price}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Особенность:</span>
                      <p className="font-semibold">{solution.feature}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Срок окупаемости:</span>
                      <p className="font-semibold">{solution.payback}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <Button className="flex-1 bg-primary hover:bg-primary/90" size="sm">
                      Рассчитать доходность
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
      <section id="comparison" className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Сравнительная таблица решений</h2>
            <p className="text-lg text-muted-foreground">Выберите оптимальный вариант по ключевым параметрам</p>
          </div>

          <Card className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Вид рыбы</TableHead>
                  <TableHead>Сегмент</TableHead>
                  <TableHead>Средняя цена</TableHead>
                  <TableHead>Срок окупаемости</TableHead>
                  <TableHead>Уровень риска</TableHead>
                  <TableHead>Потенциал прибыли</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fishSolutions.map((solution) => (
                  <TableRow key={solution.id}>
                    <TableCell className="font-medium">
                      {solution.emoji} {solution.name}
                    </TableCell>
                    <TableCell>{solution.segment}</TableCell>
                    <TableCell>{solution.price}</TableCell>
                    <TableCell>{solution.payback}</TableCell>
                    <TableCell>
                      <Badge variant={
                        solution.risk === 'Низкий' ? 'default' :
                        solution.risk === 'Средний' ? 'secondary' : 'destructive'
                      }>
                        {solution.risk}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        solution.profit === 'Очень высокий' ? 'default' :
                        solution.profit === 'Высокий' ? 'secondary' : 'outline'
                      }>
                        {solution.profit}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="p-6 border-t">
              <Button className="w-full md:w-auto bg-primary hover:bg-primary/90">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать полное сравнение в PDF
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Что включено в каждое решение</h2>
            <p className="text-lg text-muted-foreground">Полный комплекс услуг для запуска УЗВ бизнеса</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'PenTool', title: 'Проектирование УЗВ', desc: 'Индивидуальный проект с учетом специфики' },
              { icon: 'Package', title: 'Поставка и монтаж оборудования', desc: 'Полная комплектация и установка' },
              { icon: 'Users', title: 'Обучение персонала', desc: 'Подготовка команды к работе' },
              { icon: 'BarChart', title: 'Бизнес-план и расчёты', desc: 'Детальная экономическая модель' },
              { icon: 'Shield', title: 'Поддержка и сервис', desc: 'Техническое сопровождение 24/7' },
              { icon: 'CheckCircle', title: 'Гарантии качества', desc: 'Полная ответственность за результат' }
            ].map((item, index) => (
              <Card key={index} className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">Ответы на основные вопросы об УЗВ бизнесе</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger>Какая рыба самая выгодная?</AccordionTrigger>
              <AccordionContent>
                Выбор зависит от ваших возможностей и целей. Осётр дает максимальную прибыль, но требует больших вложений. 
                Форель - стабильный и надежный вариант. Сом - быстрый старт с минимальными рисками.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger>Можно ли совмещать несколько видов?</AccordionTrigger>
              <AccordionContent>
                Да, многие наши клиенты успешно выращивают несколько видов рыб. Это позволяет диверсифицировать 
                риски и увеличить общую доходность проекта.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger>Что с рынком сбыта?</AccordionTrigger>
              <AccordionContent>
                Мы помогаем с поиском покупателей и заключением договоров еще на этапе проектирования. 
                У нас есть партнерские соглашения с крупными ритейлерами и ресторанами.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Хотите узнать, какое решение подойдёт именно вам?
            </h2>
            <p className="text-lg text-muted-foreground">
              Получите персональный расчет доходности за 24 часа
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                
                <div>
                  <Label htmlFor="fish-choice">Интересующий вид рыбы</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите вид рыбы" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sturgeon">🐟 Осётр</SelectItem>
                      <SelectItem value="trout">🐟 Форель</SelectItem>
                      <SelectItem value="catfish">🐟 Клариевый сом</SelectItem>
                      <SelectItem value="all">Все варианты</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Получить персональный расчёт
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Fish" size={32} />
                <span className="text-xl font-bold">УЗВ Инвест</span>
              </div>
              <p className="text-primary-foreground/80">
                Профессиональные решения для аквакультурного бизнеса
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Решения</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Осетровые фермы</li>
                <li>Форелевые хозяйства</li>
                <li>Выращивание сома</li>
                <li>Консультации</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Проектирование УЗВ</li>
                <li>Поставка оборудования</li>
                <li>Монтаж и запуск</li>
                <li>Техподдержка</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@uzv-invest.ru</p>
                <p>Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 УЗВ Инвест. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;