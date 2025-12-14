import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showTracking, setShowTracking] = useState(false);

  const services = [
    {
      icon: 'Package',
      title: 'Экспресс доставка',
      description: 'Доставка за 1-2 часа по городу',
      price: 'от 300₽'
    },
    {
      icon: 'Truck',
      title: 'Стандартная доставка',
      description: 'Доставка в течение дня',
      price: 'от 150₽'
    },
    {
      icon: 'Globe',
      title: 'Межгород',
      description: 'Доставка между городами',
      price: 'от 500₽'
    },
    {
      icon: 'Box',
      title: 'Крупногабарит',
      description: 'Доставка больших грузов',
      price: 'от 800₽'
    }
  ];

  const tariffs = [
    {
      name: 'Базовый',
      price: '150₽',
      features: ['Доставка в течение дня', 'Вес до 5 кг', 'Поддержка 24/7', 'Отслеживание'],
      popular: false
    },
    {
      name: 'Экспресс',
      price: '300₽',
      features: ['Доставка за 1-2 часа', 'Вес до 10 кг', 'Приоритет', 'SMS уведомления', 'Поддержка 24/7'],
      popular: true
    },
    {
      name: 'Премиум',
      price: '500₽',
      features: ['Доставка за 30 минут', 'Вес до 15 кг', 'Личный курьер', 'Упаковка в подарок', 'VIP поддержка'],
      popular: false
    }
  ];

  const stats = [
    { value: '50 000+', label: 'Доставок в месяц' },
    { value: '98%', label: 'Довольных клиентов' },
    { value: '24/7', label: 'Работаем без выходных' },
    { value: '500+', label: 'Курьеров в команде' }
  ];

  const handleTrack = () => {
    if (trackingNumber) {
      setShowTracking(true);
      setActiveSection('track');
    }
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setShowTracking(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 font-sans">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-heading font-bold text-2xl">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                НОВАЯ ДОСТАВКА
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('tariffs')} className="hover:text-primary transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection('track')} className="hover:text-primary transition-colors">Отследить</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button className="hidden md:flex">Заказать доставку</Button>
          </div>
        </nav>
      </header>

      <main>
        {activeSection === 'home' && (
          <section className="py-20 px-4 animate-fade-in">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                  Доставим за <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">30 минут</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Быстрая и надёжная курьерская служба. Отслеживайте посылку в реальном времени на карте
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                  <Input 
                    placeholder="Введите номер отслеживания" 
                    className="flex-1"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                  />
                  <Button onClick={handleTrack} size="lg" className="whitespace-nowrap">
                    <Icon name="Search" className="mr-2" size={20} />
                    Отследить
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 animate-scale-in">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'services' && (
          <section className="py-20 px-4 animate-fade-in">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши услуги</h2>
                <p className="text-xl text-muted-foreground">Выберите подходящий вариант доставки</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                        <Icon name={service.icon as any} size={32} className="text-white" />
                      </div>
                      <CardTitle className="font-heading">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-heading font-bold text-primary">{service.price}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'tariffs' && (
          <section className="py-20 px-4 animate-fade-in">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Тарифы</h2>
                <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых платежей</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tariffs.map((tariff, index) => (
                  <Card key={index} className={`relative ${tariff.popular ? 'border-primary border-2 shadow-2xl scale-105' : ''}`}>
                    {tariff.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                        Популярный
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl">{tariff.name}</CardTitle>
                      <div className="text-4xl font-heading font-bold text-primary mt-4">{tariff.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {tariff.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6" variant={tariff.popular ? 'default' : 'outline'}>
                        Выбрать тариф
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'track' && (
          <section className="py-20 px-4 animate-fade-in">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Отследить посылку</h2>
                <p className="text-xl text-muted-foreground">Смотрите где находится ваша посылка в реальном времени</p>
              </div>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="font-heading">Введите номер отслеживания</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Input 
                      placeholder="Например: EXP123456789" 
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                    />
                    <Button onClick={handleTrack}>
                      <Icon name="Search" className="mr-2" size={20} />
                      Найти
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {showTracking && trackingNumber && (
                <div className="space-y-6 animate-scale-in">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-heading">Номер отслеживания: {trackingNumber}</CardTitle>
                      <CardDescription>Последнее обновление: сегодня в 14:30</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                          <div className="text-center space-y-4">
                            <Icon name="MapPin" size={64} className="text-primary mx-auto" />
                            <div>
                              <div className="text-lg font-semibold">Курьер в пути</div>
                              <div className="text-sm text-muted-foreground">Примерное время прибытия: 15:00</div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-heading font-semibold text-lg">История отправления</h3>
                          <div className="space-y-4">
                            {[
                              { time: '14:30', status: 'Курьер забрал посылку', active: true },
                              { time: '13:45', status: 'Посылка прибыла в сортировочный центр', active: false },
                              { time: '12:00', status: 'Заказ оформлен', active: false }
                            ].map((event, i) => (
                              <div key={i} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                  <div className={`w-3 h-3 rounded-full ${event.active ? 'bg-primary animate-pulse' : 'bg-muted'}`}></div>
                                  {i !== 2 && <div className="w-0.5 h-12 bg-muted"></div>}
                                </div>
                                <div className="flex-1 pb-4">
                                  <div className={`font-semibold ${event.active ? 'text-primary' : ''}`}>{event.status}</div>
                                  <div className="text-sm text-muted-foreground">{event.time}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="py-20 px-4 animate-fade-in">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">О компании</h2>
                <p className="text-xl text-muted-foreground">Лидер рынка курьерских услуг</p>
              </div>
              
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed">
                      <strong className="font-heading text-primary">НОВАЯ ДОСТАВКА</strong> — современная курьерская служба, которая работает с 2015 года. 
                      Мы доставили более 2 миллионов посылок и заслужили доверие тысяч клиентов по всей России.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                      Наша миссия — сделать доставку максимально быстрой, надёжной и удобной. 
                      Мы используем современные технологии отслеживания и работаем только с проверенными курьерами.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'Shield', title: 'Безопасность', text: 'Страхование всех отправлений' },
                  { icon: 'Clock', title: 'Пунктуальность', text: 'Доставка точно в срок' },
                  { icon: 'Headset', title: 'Поддержка', text: 'Помощь 24/7 без выходных' }
                ].map((item, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={item.icon as any} size={32} className="text-white" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="py-20 px-4 animate-fade-in">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Контакты</h2>
                <p className="text-xl text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Напишите нам</CardTitle>
                    <CardDescription>Ответим в течение 15 минут</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <Input type="tel" placeholder="Телефон" />
                      </div>
                      <div>
                        <textarea 
                          className="w-full min-h-[120px] px-3 py-2 rounded-md border border-input bg-background resize-none"
                          placeholder="Ваше сообщение"
                        ></textarea>
                      </div>
                      <Button className="w-full">Отправить</Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Телефон</div>
                          <div className="text-muted-foreground">8 (800) 555-35-35</div>
                          <div className="text-sm text-muted-foreground">Бесплатно по России</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" className="text-secondary" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Email</div>
                          <div className="text-muted-foreground">info@expressdelivery.ru</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" className="text-accent" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Офис</div>
                          <div className="text-muted-foreground">г. Москва, ул. Тверская, д. 15</div>
                          <div className="text-sm text-muted-foreground">Пн-Вс: 08:00 - 22:00</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-muted/50 border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-heading font-bold text-xl">
              <Icon name="Zap" className="text-primary" size={24} />
              НОВАЯ ДОСТАВКА
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 НОВАЯ ДОСТАВКА. Все права защищены.
            </div>
            <div className="flex gap-4">
              <button className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </button>
              <button className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;