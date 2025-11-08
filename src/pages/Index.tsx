import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Stethoscope',
      title: 'Разовый прием',
      description: 'Консультация и осмотр вашего питомца опытным ветеринаром'
    },
    {
      icon: 'Syringe',
      title: 'Вакцинация',
      description: 'Полный спектр прививок для защиты здоровья собаки'
    },
    {
      icon: 'Activity',
      title: 'Физпроцедуры',
      description: 'Современные методы физиотерапии для быстрого восстановления'
    },
    {
      icon: 'ClipboardList',
      title: 'Плановый медосмотр',
      description: 'Регулярный контроль здоровья для профилактики заболеваний'
    },
    {
      icon: 'FlaskConical',
      title: 'Анализы',
      description: 'Полная лабораторная диагностика с быстрыми результатами'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Квалифицированный персонал',
      description: 'Опытные ветеринары со специализацией на породных заболеваниях собак'
    },
    {
      icon: 'Clock',
      title: 'Отсутствие очередей',
      description: 'Прием строго по записи — ваше время ценно для нас'
    },
    {
      icon: 'Heart',
      title: 'Комфорт',
      description: 'Спокойная атмосфера и внимательное отношение к каждому питомцу'
    },
    {
      icon: 'Star',
      title: 'Качество',
      description: 'Современное оборудование и проверенные методы лечения'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl md:text-3xl font-bold text-primary">
            dogdoc
          </div>
          <Button size="lg" className="animate-scale-in">
            Записаться
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Забота о здоровье вашего питомца
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Специализированная ветеринарная клиника для собак. Эксперты в лечении породных заболеваний с индивидуальным подходом к каждому пациенту.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться на прием
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img
              src="https://cdn.poehali.dev/projects/2c3cb221-793c-408a-94f1-e3303311f575/files/2276ace4-c5fb-4697-a32e-02a1acb01aee.jpg"
              alt="Ветеринарная клиника"
              className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр ветеринарных услуг для здоровья и комфорта вашей собаки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1 animate-scale-in">
            <img
              src="https://cdn.poehali.dev/projects/2c3cb221-793c-408a-94f1-e3303311f575/files/709e43b0-e198-4c8c-befb-ffc938e80150.jpg"
              alt="Здоровые собаки"
              className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
          <div className="space-y-8 order-1 md:order-2 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы специализируемся на лечении собак различных пород и знаем все особенности их здоровья
              </p>
            </div>
            <div className="grid gap-6">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name={advantage.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наша клиника
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современное оборудование и комфортное пространство для вашего питомца
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl animate-scale-in group">
              <img
                src="https://cdn.poehali.dev/projects/2c3cb221-793c-408a-94f1-e3303311f575/files/c3490e9c-c4cc-482e-80cf-020aa6c24262.jpg"
                alt="Приёмная клиники"
                className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl">Приёмная</h3>
                <p className="text-white/90 text-sm">Уютная зона ожидания</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl animate-scale-in group" style={{ animationDelay: '0.1s' }}>
              <img
                src="https://cdn.poehali.dev/projects/2c3cb221-793c-408a-94f1-e3303311f575/files/d010b9ad-c445-422a-a31d-7a88db662a5d.jpg"
                alt="Кабинет осмотра"
                className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl">Кабинет осмотра</h3>
                <p className="text-white/90 text-sm">Современное оборудование</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl animate-scale-in group" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://cdn.poehali.dev/projects/2c3cb221-793c-408a-94f1-e3303311f575/files/3d0dae3f-fb6e-41e9-88ff-af5c40df1e6f.jpg"
                alt="Процедурная"
                className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl">Процедурная</h3>
                <p className="text-white/90 text-sm">Чистота и стерильность</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl animate-scale-in group" style={{ animationDelay: '0.3s' }}>
              <img
                src="https://cdn.poehali.dev/projects/2c3cb221-793c-408a-94f1-e3303311f575/files/3e163dac-99b8-4b15-b994-2f7108c46d7f.jpg"
                alt="Зона восстановления"
                className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl">Зона восстановления</h3>
                <p className="text-white/90 text-sm">Комфорт после процедур</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Запишитесь на прием
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Оставьте заявку, и мы свяжемся с вами для подбора удобного времени посещения
              </p>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/2c3cb221-793c-408a-94f1-e3303311f575/files/72001f76-17e4-4be6-9b07-93458e2dfa2a.jpg"
                  alt="Ветеринар с собакой"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
            <Card className="animate-scale-in border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Форма записи</CardTitle>
                <CardDescription>
                  Заполните форму, и мы перезвоним вам в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Номер телефона"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Расскажите о вашем питомце и причине обращения"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="text-base"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-base">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Нам доверяют здоровье своих питомцев сотни владельцев собак
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="animate-fade-in border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">АС</span>
                </div>
                <div>
                  <CardTitle className="text-lg">Анна Смирнова</CardTitle>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Наш золотистый ретривер Макс страдал от аллергии. Врачи клиники DogDoc провели полное обследование и назначили эффективное лечение. Сейчас Макс здоров и счастлив! Спасибо за профессионализм!
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="animate-fade-in border-2 hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">ДП</span>
                </div>
                <div>
                  <CardTitle className="text-lg">Дмитрий Петров</CardTitle>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Приводим нашу немецкую овчарку на плановые осмотры уже 2 года. Очень нравится отношение персонала — никакой суеты, всё по времени. Собака не нервничает, а это важно!
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="animate-fade-in border-2 hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">ЕВ</span>
                </div>
                <div>
                  <CardTitle className="text-lg">Елена Васильева</CardTitle>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Экстренно обращались с лабрадором — врачи приняли быстро, провели все необходимые процедуры. Отдельное спасибо за подробные объяснения и рекомендации по уходу. Рекомендую всем!
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">
                dogdoc
              </div>
              <p className="text-white/80">
                Ветеринарная клиника для собак с заботой о каждом питомце
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@dogdoc.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  г. Москва, ул. Примерная, 123
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Режим работы</h3>
              <div className="space-y-2 text-white/80">
                <p>Пн-Пт: 9:00 - 21:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
                <p className="text-primary font-medium pt-2">Прием по записи</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 DogDoc. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;