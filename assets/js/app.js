// Função para gerar dados aleatórios realistas para imóveis em Portugal
        function generateRealisticProperties(count) {
            const cities = [
                'Lisboa', 'Porto', 'Cascais', 'Albufeira', 'Faro', 'Braga', 'Coimbra', 'Aveiro', 
                'Funchal', 'Ponta Delgada', 'Guimarães', 'Évora', 'Setúbal', 'Leiria', 'Viseu',
                'Viana do Castelo', 'Bragança', 'Guarda', 'Castelo Branco', 'Portalegre', 'Santarém',
                'Lagos', 'Portimão', 'Vilamoura', 'Quarteira', 'Almancil', 'Carvoeiro', 'Tavira',
                'Loures', 'Oeiras', 'Cascais', 'Sintra', 'Amadora', 'Odivelas', 'Seixal', 'Barreiro',
                'Matosinhos', 'Maia', 'Gondomar', 'Valongo', 'Paredes', 'Paços de Ferreira', 'Lousada',
                'Famalicão', 'Braga', 'Guimarães', 'Vila Nova de Gaia', 'Espinho', 'Santa Maria da Feira',
                'São João da Madeira', 'Oliveira de Azeméis', 'Águeda', 'Mealhada', 'Anadia', 'Cantanhede',
                'Figueira da Foz', 'Pombal', 'Leiria', 'Marinha Grande', 'Caldas da Rainha', 'Óbidos',
                'Peniche', 'Lourinhã', 'Torres Vedras', 'Alenquer', 'Azambuja', 'Cartaxo', 'Santarém',
                'Tomar', 'Abrantes', 'Sardoal', 'Golegã', 'Chamusca', 'Almeirim', 'Alpiarça', 'Salvaterra de Magos',
                'Benavente', 'Moita', 'Barreiro', 'Seixal', 'Almada', 'Seixal', 'Sesimbra', 'Setúbal',
                'Sines', 'Santiago do Cacém', 'Grândola', 'Alcácer do Sal', 'Palmela', 'Montijo', 'Alcochete'
            ];
            
            const neighborhoods = {
                'Lisboa': ['Parque das Nações', 'Chiado', 'Baixa', 'Alfama', 'Graça', 'Belém', 'Restelo', 'Campo de Ourique', 'Estrela', 'Príncipe Real', 'Arroios', 'Avenidas Novas', 'Lumiar', 'Marvila', 'Beato', 'Penha de França', 'São Domingos de Benfica', 'Carnide', 'Olivais'],
                'Porto': ['Ribeira', 'Baixa', 'Boavista', 'Foz', 'Lordelo do Ouro', 'Massarelos', 'Cedofeita', 'Santo Ildefonso', 'Sé', 'Vitória', 'Miragaia', 'São Nicolau', 'Ramalde', 'Paranhos', 'Campanhã', 'Aldoar', 'Nevogilde', 'Bonfim'],
                'Cascais': ['Estoril', 'Cascais', 'Carcavelos', 'Parede', 'São Pedro do Estoril', 'São João do Estoril', 'Monte Estoril', 'Alcabideche', 'Talaíde', 'Manique de Baixo', 'Alcoitão', 'Bicesse'],
                'Albufeira': ['Albufeira', 'Olhos de Água', 'Ferreiras', 'Guia', 'Paderne', 'Alte', 'Boliqueime'],
                'Faro': ['Faro', 'Montenegro', 'Sé', 'São Pedro', 'Estoi', 'Santa Bárbara de Nexe']
            };
            
            const propertyTypes = ['apartamento', 'moradia', 'casa', 'terreno', 'escritorio', 'loja'];
            const features = [
                'Ar Condicionado', 'Garagem', 'Varanda', 'Vista Mar', 'Vista Rio', 'Vista Cidade', 'Piscina',
                'Jardim', 'Lareira', 'Suite', 'Arrecadação', 'Elevador', 'Solar', 'Aquecimento Central',
                'Vidros Duplos', 'Estores Elétricos', 'Segurança 24h', 'Ginásio', 'Sauna', 'Jacuzzi',
                'Churrasqueira', 'Terraço', 'Balcão', 'Cozinha Equipada', 'Máquina de Lavar Louça',
                'Máquina de Lavar Roupa', 'Frigorífico', 'Fogão', 'Forno', 'Microondas', 'Exaustor',
                'TV Cabo', 'Internet', 'Telefone', 'Intercomunicador', 'Videoporte', 'Alarme',
                'Portão Automático', 'Portão Elétrico', 'Cerca Elétrica', 'Sistema de Irrigação',
                'Painéis Solares', 'Recuperação de Água', 'Isolamento Térmico', 'Isolamento Acústico',
                'Piso em Madeira', 'Piso em Mármore', 'Piso em Granito', 'Teto Falso', 'Iluminação LED',
                'Janelas de PVC', 'Janelas de Alumínio', 'Persianas', 'Mosquiteiros', 'Proteção Solar'
            ];
            
            const descriptions = [
                'Excelente imóvel localizado em zona privilegiada, com fácil acesso a transportes públicos, comércio e serviços.',
                'Propriedade bem conservada, com acabamentos de qualidade e excelente relação qualidade-preço.',
                'Imóvel com localização central, próximo de escolas, hospitais e centros comerciais.',
                'Magnífica propriedade com vistas deslumbrantes e grande potencial de valorização.',
                'Casa espaçosa e luminosa, perfeita para famílias que procuram conforto e segurança.',
                'Apartamento moderno com design contemporâneo e equipamentos de última geração.',
                'Moradia em zona residencial tranquila, ideal para quem procura qualidade de vida.',
                'Imóvel com excelente exposição solar e áreas exteriores agradáveis.',
                'Propriedade com características únicas e grande charme, em zona de grande procura.',
                'Excelente oportunidade de investimento, com elevado potencial de rendibilidade.'
            ];
            
            const agentNotes = [
                'O proprietário está motivado para vender e está aberto a negociações.',
                'Imóvel com licença de alojamento local aprovada, excelente para investimento.',
                'Recentemente sujeito a obras de melhoramento, todos os documentos em ordem.',
                'Localização com grande potencial de valorização nos próximos anos.',
                'Propriedade com excelente relação qualidade-preço para a zona.',
                'Imóvel vazio e pronto para habitar, visita recomendada.',
                'O proprietário está a mudar-se para o estrangeiro, motivo da venda.',
                'Excelente estado de conservação, sem necessidade de obras.',
                'Zona muito tranquila e segura, ideal para famílias com crianças.',
                'Próximo de parques e áreas de lazer, excelente qualidade de vida.'
            ];
            
            const properties = [];
            
            // Preços médios por região (€/m²)
            const priceByRegion = {
                'Lisboa': { min: 3000, max: 6000 },
                'Porto': { min: 2500, max: 4500 },
                'Cascais': { min: 3500, max: 8000 },
                'Albufeira': { min: 2800, max: 5500 },
                'Faro': { min: 2200, max: 4000 },
                'Braga': { min: 1800, max: 3200 },
                'Coimbra': { min: 1600, max: 2800 },
                'Aveiro': { min: 1700, max: 3000 },
                'Funchal': { min: 2000, max: 3800 },
                'Ponta Delgada': { min: 1500, max: 2800 },
                'default': { min: 1200, max: 3500 }
            };
            
            for (let i = 0; i < count; i++) {
                const city = cities[Math.floor(Math.random() * cities.length)];
                const neighborhoodList = neighborhoods[city] || ['Centro', 'Zona Histórica', 'Nova Área'];
                const neighborhood = neighborhoodList[Math.floor(Math.random() * neighborhoodList.length)];
                
                const propertyType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
                const isForRent = Math.random() < 0.3; // 30% para arrendamento
                
                // Gerar área realista baseada no tipo de imóvel
                let area;
                switch (propertyType) {
                    case 'apartamento':
                        area = Math.floor(Math.random() * 150) + 40; // 40-190m²
                        break;
                    case 'moradia':
                        area = Math.floor(Math.random() * 300) + 120; // 120-420m²
                        break;
                    case 'casa':
                        area = Math.floor(Math.random() * 250) + 80; // 80-330m²
                        break;
                    case 'terreno':
                        area = Math.floor(Math.random() * 2000) + 500; // 500-2500m²
                        break;
                    case 'escritorio':
                        area = Math.floor(Math.random() * 200) + 50; // 50-250m²
                        break;
                    case 'loja':
                        area = Math.floor(Math.random() * 150) + 30; // 30-180m²
                        break;
                    default:
                        area = Math.floor(Math.random() * 200) + 60;
                }
                
                // Gerar quartos e banheiros realistas
                let bedrooms, bathrooms;
                if (propertyType === 'apartamento' || propertyType === 'casa') {
                    bedrooms = Math.min(Math.floor(Math.random() * 5) + 1, 5); // 1-5 quartos
                    bathrooms = Math.min(Math.floor(Math.random() * 3) + 1, 3); // 1-3 banheiros
                } else if (propertyType === 'moradia') {
                    bedrooms = Math.min(Math.floor(Math.random() * 6) + 2, 6); // 2-6 quartos
                    bathrooms = Math.min(Math.floor(Math.random() * 4) + 1, 4); // 1-4 banheiros
                } else {
                    bedrooms = 0;
                    bathrooms = Math.floor(Math.random() * 2) + 1; // 1-2 banheiros
                }
                
                // Calcular preço baseado na região e área
                const regionPrices = priceByRegion[city] || priceByRegion['default'];
                const pricePerSqm = Math.floor(Math.random() * (regionPrices.max - regionPrices.min) + regionPrices.min);
                const basePrice = area * pricePerSqm;
                
                // Ajustar preço baseado em fatores
                let priceMultiplier = 1;
                if (bedrooms >= 3) priceMultiplier += 0.1;
                if (bathrooms >= 2) priceMultiplier += 0.05;
                if (Math.random() < 0.3) priceMultiplier += 0.15; // Vistas especiais
                if (Math.random() < 0.2) priceMultiplier += 0.1; // Localização premium
                
                let finalPrice = Math.floor(basePrice * priceMultiplier);
                
                // Para arrendamento, calcular renda mensal (0.3% a 0.5% do valor)
                let monthlyRent = 0;
                if (isForRent) {
                    monthlyRent = Math.floor(finalPrice * (Math.random() * 0.002 + 0.003));
                    finalPrice = monthlyRent;
                }
                
                // Gerar características aleatórias
                const numFeatures = Math.floor(Math.random() * 8) + 3; // 3-10 características
                const selectedFeatures = [];
                for (let j = 0; j < numFeatures; j++) {
                    const feature = features[Math.floor(Math.random() * features.length)];
                    if (!selectedFeatures.includes(feature)) {
                        selectedFeatures.push(feature);
                    }
                }
                
                // Gerar título
                const typeNames = {
                    'apartamento': `Apartamento T${bedrooms}`,
                    'moradia': `Moradia T${bedrooms}`,
                    'casa': `Casa T${bedrooms}`,
                    'terreno': 'Terreno para Construção',
                    'escritorio': 'Escritório Comercial',
                    'loja': 'Loja Comercial'
                };
                
                const specialFeatures = [];
                if (selectedFeatures.includes('Vista Mar')) specialFeatures.push('Vista Mar');
                if (selectedFeatures.includes('Vista Rio')) specialFeatures.push('Vista Rio');
                if (selectedFeatures.includes('Piscina')) specialFeatures.push('com Piscina');
                if (selectedFeatures.includes('Jardim')) specialFeatures.push('com Jardim');
                
                const title = specialFeatures.length > 0 
                    ? `${typeNames[propertyType]} ${specialFeatures.join(' ')}` 
                    : typeNames[propertyType];
                
                // Gerar descrição
                const description = descriptions[Math.floor(Math.random() * descriptions.length)];
                const agentNote = agentNotes[Math.floor(Math.random() * agentNotes.length)];
                
                // URL de imagem aleatória
                const imageSeeds = ['house', 'apartment', 'villa', 'condo', 'building', 'property', 'real-estate', 'home', 'residence', 'architecture'];
                const imageSeed = imageSeeds[Math.floor(Math.random() * imageSeeds.length)] + Math.floor(Math.random() * 1000);
                const imageUrl = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1600000000000) + 1500000000000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`;
                
                const property = {
                    id: i + 100, // Começar do ID 100 para não conflitar com os existentes
                    title: title,
                    location: `${city}, ${neighborhood}`,
                    price: finalPrice,
                    area: area,
                    bedrooms: bedrooms,
                    bathrooms: bathrooms,
                    type: propertyType,
                    features: selectedFeatures,
                    image: imageUrl,
                    description: description,
                    agentNotes: agentNote
                };
                
                properties.push(property);
            }
            
            return properties;
        }

        // Gerar 1000 imóveis realistas
        const generatedProperties = generateRealisticProperties(1000);

        // Separar entre venda e arrendamento (70% venda, 30% arrendamento)
        const newPropertiesForSale = generatedProperties.slice(0, 700);
        const newPropertiesForRent = generatedProperties.slice(700);

        // Dados de imóveis expandidos (baseado em dados reais do mercado português)
        const propertiesForSale = [
            // Manter os imóveis existentes
            {
                id: 1,
                title: "Apartamento T3 com Vista Tejo",
                location: "Lisboa, Parque das Nações",
                price: 520000,
                area: 125,
                bedrooms: 3,
                bathrooms: 2,
                type: "apartamento",
                features: ["Vista Tejo", "Ar Condicionado", "Garagem", "Piscina", "Varanda"],
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Magnífico apartamento T3 localizado no prestigiado Parque das Nações, com vista deslumbrante para o Rio Tejo. O imóvel foi recentemente renovado e possui acabamentos de alta qualidade. A sala de estar é espaçosa e tem acesso a uma varanda ampla, perfeita para desfrutar da vista. A cozinha está equipada com eletrodomésticos modernos e tem uma área de refeições integrada. Os quartos são todos espaçosos e com boa luz natural. O edifício tem piscina, ginásio e segurança 24h.",
                agentNotes: "O proprietário está motivado para vender e está aberto a negociações. O apartamento tem uma licença de alojamento local aprovada, o que representa uma excelente oportunidade de investimento. A zona do Parque das Nações continua a valorizar-se, com vários projetos de desenvolvimento previstos para os próximos anos."
            },
            {
                id: 2,
                title: "Moradia T4 em Cascais",
                location: "Cascais, Monte Estoril",
                price: 950000,
                area: 280,
                bedrooms: 4,
                bathrooms: 3,
                type: "moradia",
                features: ["Jardim", "Piscina", "Garagem para 3 carros", "Solar", "Lareira"],
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Espectacular moradia T4 localizada na exclusiva zona de Monte Estoril, a poucos minutos das praias de Cascais. A propriedade dispõe de uma área bruta de construção de 280m², distribuídos por dois pisos. No rés-do-chão, encontramos uma ampla sala de estar com lareira, cozinha totalmente equipada, uma suite e um WC de serviço. No primeiro piso, existem três suites, todas com varanda e vista para o jardim. O exterior inclui um jardim bem cuidado com piscina, terraço solar e garagem fechada para três viaturas.",
                agentNotes: "Esta moradia pertence a uma família que está a mudar-se para o estrangeiro. O imóvel tem excelente potencial de valorização devido à localização privilegiada e à qualidade da construção. Recentemente foram instalados painéis solares, o que permite uma significativa poupança nas contas de eletricidade. A zona é muito tranquila e segura, ideal para famílias com crianças."
            },
            {
                id: 3,
                title: "Apartamento T2 no Porto",
                location: "Porto, Ribeira",
                price: 350000,
                area: 85,
                bedrooms: 2,
                bathrooms: 1,
                type: "apartamento",
                features: ["Vista Rio", "Renovado", "Elevador", "Bom estado"],
                image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Encantador apartamento T2 renovado no coração da zona histórica do Porto, com vista para o Rio Douro. O imóvel está localizado num edifício com elevador e conserva elementos arquitetónicos originais, como o teto alto e as janelas de madeira. A renovação foi feita com gosto, mantendo o charme original mas com todos os confortos modernos. A sala é espaçosa e tem duas janelas com vista para a Ribeira. Os quartos são ambos espaçosos e têm armários embutidos. A cozinha está totalmente equipada e tem uma área de refeições.",
                agentNotes: "Este apartamento é uma excelente oportunidade para quem quer viver no centro histórico do Porto. A zona é muito animada, com restaurantes, bares e lojas a poucos metros de distância. O edifício foi recentemente sujeito a obras de melhoramento na fachada e nas partes comuns. O proprietário original comprou o apartamento para reforma e venda, pelo que todos os documentos estão em ordem."
            },
            // Adicionar os novos imóveis gerados
            ...newPropertiesForSale
        ];

        const propertiesForRent = [
            // Manter os imóveis existentes
            {
                id: 101,
                title: "Apartamento T2 no Centro",
                location: "Lisboa, Baixa",
                price: 1200,
                area: 80,
                bedrooms: 2,
                bathrooms: 1,
                type: "apartamento",
                features: ["Mobilado", "Ar Condicionado", "Elevador"],
                image: "https://images.unsplash.com/photo-1554995207-c18c2037521d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Aconchegante apartamento T2 mobilado no coração da Baixa de Lisboa. O imóvel está num edifício histórico com elevador e oferece uma área de 80m². A sala de estar é espaçosa e tem uma varanda com vista para a rua. A cozinha está totalmente equipada com eletrodomésticos modernos. Os quartos são confortáveis e têm armários embutidos. O apartamento tem ar condicionado e está em excelente estado de conservação. A localização é privilegiada, a poucos minutos do Rossio, Chiado e das principais estações de metro.",
                agentNotes: "Este apartamento é ideal para jovens profissionais ou casais que querem viver no centro de Lisboa. O proprietário está a arrendar porque se mudou para o estrangeiro por um período de dois anos. O imóvel está disponível para arrendamento de longo prazo. A zona é muito segura e tem excelentes acessos a transportes públicos, comércio e serviços."
            },
            {
                id: 102,
                title: "Apartamento T1 perto do Metro",
                location: "Porto, Boavista",
                price: 800,
                area: 55,
                bedrooms: 1,
                bathrooms: 1,
                type: "apartamento",
                features: ["Mobilado", "Bom estado", "Próximo transportes"],
                image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Funcional apartamento T1 mobilado na dinâmica zona da Boavista, no Porto. O imóvel está num edifício bem conservado com elevador e oferece uma área de 55m². A sala de estar é espaçosa e tem boa iluminação natural. A cozinha está equipada com os eletrodomésticos essenciais. O quarto é confortável e tem um armário embutido. A casa de banho está em bom estado. O apartamento está mobilado com móveis modernos e funcionais. A localização é excelente, a poucos minutos da estação de metro do Carolina Michaelis e do centro da cidade.",
                agentNotes: "Este apartamento é perfeito para um estudante ou jovem profissional que procura uma solução prática e bem localizada. O proprietário é um investidor que arrenda o imóvel há vários anos com sucesso. A zona da Boavista é muito procurada devido à sua centralidade e à proximidade da Universidade do Porto. O imóvel está disponível para arrendamento a partir de setembro."
            },
            // Adicionar os novos imóveis gerados
            ...newPropertiesForRent
        ];

        console.log(`Total de imóveis para venda: ${propertiesForSale.length}`);
        console.log(`Total de imóveis para arrendamento: ${propertiesForRent.length}`);
        
        // Elementos do DOM
        const evaluateBtn = document.querySelector('[data-page="evaluate"]');
        const modal = document.getElementById('aiEvaluationModal');
        const closeModalBtns = document.querySelectorAll('.close-modal');
        const startEvaluationBtn = document.getElementById('startEvaluationBtn');
        const evaluationForm = document.getElementById('evaluationForm');
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const photoGrid = document.getElementById('photoGrid');
        const resultsContainer = document.getElementById('resultsContainer');
        const progressBar = document.querySelector('.progress-fill');
        const progressText = document.getElementById('progressText');
        const resultsSection = document.getElementById('resultsSection');
        const reportSection = document.getElementById('reportSection');
        
        // Botões de navegação entre steps
        const nextToPhotosBtn = document.getElementById('nextToPhotosBtn');
        const backToInfoBtn = document.getElementById('backToInfoBtn');
        const newEvaluationBtn = document.getElementById('newEvaluationBtn');
        const closeResultsBtn = document.getElementById('closeResultsBtn');
        
        // Steps
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        const step3 = document.getElementById('step3');
        
        // Variáveis de estado
        let uploadedPhotos = [];
        let evaluationData = {};
        let savedPropertiesList = [];
        
        // Elementos dos modais adicionais
        const buyPropertyModal = document.getElementById('buyPropertyModal');
        const rentPropertyModal = document.getElementById('rentPropertyModal');
        const creditSimulatorModal = document.getElementById('creditSimulatorModal');
        const propertyDetailsModal = document.getElementById('propertyDetailsModal');
        const chatbotModal = document.getElementById('chatbotModal');
        
        const buyPropertyResults = document.getElementById('buyPropertyResults');
        const rentPropertyResults = document.getElementById('rentPropertyResults');
        
        const applyBuyFilters = document.getElementById('applyBuyFilters');
        const applyRentFilters = document.getElementById('applyRentFilters');
        
        const buyPropertyType = document.getElementById('buyPropertyType');
        const buyLocation = document.getElementById('buyLocation');
        const buyMinPrice = document.getElementById('buyMinPrice');
        const buyMaxPrice = document.getElementById('buyMaxPrice');
        const buyBedrooms = document.getElementById('buyBedrooms');
        
        const rentPropertyType = document.getElementById('rentPropertyType');
        const rentLocation = document.getElementById('rentLocation');
        const rentMinPrice = document.getElementById('rentMinPrice');
        const rentMaxPrice = document.getElementById('rentMaxPrice');
        const rentBedrooms = document.getElementById('rentBedrooms');
        
        // Elementos do modal de detalhes do imóvel
        const propertyDetailsTitle = document.getElementById('propertyDetailsTitle');
        const propertyMainImage = document.getElementById('propertyMainImage');
        const propertyDescription = document.getElementById('propertyDescription');
        const propertyFeatures = document.getElementById('propertyFeatures');
        const propertyPrice = document.getElementById('propertyPrice');
        const propertyArea = document.getElementById('propertyArea');
        const propertyBedrooms = document.getElementById('propertyBedrooms');
        const propertyBathrooms = document.getElementById('propertyBathrooms');
        const propertyType = document.getElementById('propertyType');
        
        // Elementos do chatbot
        const chatbotMessages = document.getElementById('chatbotMessages');
        const chatbotForm = document.getElementById('chatbotForm');
        const chatbotInput = document.getElementById('chatbotInput');
        
        // Elementos do painel de imóveis guardados
        const savedPropertiesPanel = document.getElementById('savedPropertiesPanel');
        const savedPropertiesListContainer = document.getElementById('savedPropertiesList');
        const savedPropertiesToggle = document.getElementById('savedPropertiesToggle');
        const closeSavedProperties = document.getElementById('closeSavedProperties');
        
        // Elementos do simulador de crédito
        const propertyValue = document.getElementById('propertyValue');
        const downPayment = document.getElementById('downPayment');
        const loanTerm = document.getElementById('loanTerm');
        const interestRate = document.getElementById('interestRate');
        const calculateCredit = document.getElementById('calculateCredit');
        const creditResults = document.getElementById('creditResults');
        const newSimulation = document.getElementById('newSimulation');
        const downloadSimulation = document.getElementById('downloadSimulation');
        
        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            // Event Listeners para avaliação IA
            if (evaluateBtn) {
                evaluateBtn.addEventListener('click', openEvaluationModal);
            }
            
            // Corrigido: Adicionado event listeners para todos os botões de fechar modal
            if (closeModalBtns) {
                closeModalBtns.forEach(btn => {
                    btn.addEventListener('click', function() {
                        // Encontra o modal mais próximo que contém este botão
                        const modal = this.closest('.modal');
                        if (modal) {
                            modal.classList.add('hidden');
                            document.body.style.overflow = 'auto';
                        }
                    });
                });
            }
            
            if (startEvaluationBtn) {
                startEvaluationBtn.addEventListener('click', startEvaluation);
            }
            
            if (evaluationForm) {
                evaluationForm.addEventListener('submit', handleFormSubmit);
            }
            
            if (uploadArea) {
                uploadArea.addEventListener('click', () => fileInput.click());
                uploadArea.addEventListener('dragover', handleDragOver);
                uploadArea.addEventListener('drop', handleDrop);
            }
            
            if (fileInput) {
                fileInput.addEventListener('change', handleFileSelect);
            }
            
            // Navegação entre steps
            if (nextToPhotosBtn) {
                nextToPhotosBtn.addEventListener('click', () => showStep(2));
            }
            
            if (backToInfoBtn) {
                backToInfoBtn.addEventListener('click', () => showStep(1));
            }
            
            if (newEvaluationBtn) {
                newEvaluationBtn.addEventListener('click', resetEvaluationForm);
            }
            
            if (closeResultsBtn) {
                closeResultsBtn.addEventListener('click', closeEvaluationModal);
            }
            
            // Event Listeners para modais adicionais
            document.querySelectorAll('[data-page="home"]').forEach(btn => {
                btn.addEventListener('click', openBuyModal);
            });
            
            document.querySelectorAll('[data-page="rent"]').forEach(btn => {
                btn.addEventListener('click', openRentModal);
            });
            
            document.querySelectorAll('[data-page="simulate"]').forEach(btn => {
                btn.addEventListener('click', openCreditSimulator);
            });
            
            // Event Listeners para botões da homepage
            const showDemoBtn = document.getElementById('showDemoBtn');
            if (showDemoBtn) {
                showDemoBtn.addEventListener('click', showDemo);
            }
            
            const talkToAgentBtn = document.getElementById('talkToAgentBtn');
            if (talkToAgentBtn) {
                talkToAgentBtn.addEventListener('click', openChatbot);
            }
            
            // Event Listeners para painel de imóveis guardados
            if (savedPropertiesToggle) {
                savedPropertiesToggle.addEventListener('click', toggleSavedProperties);
            }
            
            if (closeSavedProperties) {
                closeSavedProperties.addEventListener('click', toggleSavedProperties);
            }
            
            // Fechar modais ao clicar fora
            window.addEventListener('click', function(event) {
                if (event.target.classList.contains('modal')) {
                    event.target.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Event Listeners para filtros
            if (applyBuyFilters) {
                applyBuyFilters.addEventListener('click', applyBuyPropertyFilters);
            }
            
            if (applyRentFilters) {
                applyRentFilters.addEventListener('click', applyRentPropertyFilters);
            }
            
            // Event Listeners para simulador de crédito
            if (calculateCredit) {
                calculateCredit.addEventListener('click', calculateCreditSimulation);
            }
            
            if (newSimulation) {
                newSimulation.addEventListener('click', resetCreditSimulation);
            }
            
            if (downloadSimulation) {
                downloadSimulation.addEventListener('click', downloadCreditReport);
            }
            
            // Event Listeners para chatbot
            if (chatbotForm) {
                chatbotForm.addEventListener('submit', handleChatbotMessage);
            }
            
            // Carregar propriedades iniciais
            loadBuyProperties(propertiesForSale);
            loadRentProperties(propertiesForRent);
            
            // Carregar imóveis guardados do localStorage
            loadSavedProperties();
            
            // Botão "Ver Detalhes" nos cards de propriedade
            document.querySelectorAll('.view-details-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    // Em um ambiente real, isso abriria os detalhes da propriedade específica
                    showNotification('Funcionalidade em desenvolvimento', 'info');
                });
            });
            
            // Botões de navegação no menu
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const page = this.getAttribute('data-page');
                    
                    if (page === 'home') {
                        openBuyModal();
                    } else if (page === 'rent') {
                        openRentModal();
                    } else if (page === 'simulate') {
                        openCreditSimulator();
                    } else if (page === 'evaluate') {
                        openEvaluationModal();
                    } else if (page === 'about') {
                        showNotification('Página Sobre Nós em desenvolvimento', 'info');
                    }
                });
            });
            
            // Botão de anunciar
            const advertiseBtn = document.getElementById('advertiseBtn');
            if (advertiseBtn) {
                advertiseBtn.addEventListener('click', function() {
                    showNotification('Funcionalidade em desenvolvimento', 'info');
                });
            }
            
            // Menu mobile
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileNav = document.getElementById('mobileNav');
            
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', function() {
                    mobileNav.classList.toggle('hidden');
                });
            }
            
            // Botão "Ver Todos os Imóveis"
            const viewAllPropertiesBtn = document.getElementById('viewAllPropertiesBtn');
            if (viewAllPropertiesBtn) {
                viewAllPropertiesBtn.addEventListener('click', function() {
                    openBuyModal();
                });
            }
        });
        
        // Funções para o modal de avaliação
        function openEvaluationModal() {
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                resetEvaluationForm();
                showStep(1);
            }
        }
        
        function closeEvaluationModal() {
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
                resetEvaluationForm();
            }
        }
        
        function showStep(stepNumber) {
            // Esconder todos os steps
            step1.classList.add('hidden');
            step2.classList.add('hidden');
            step3.classList.add('hidden');
            
            // Mostrar o step selecionado
            if (stepNumber === 1) {
                step1.classList.remove('hidden');
            } else if (stepNumber === 2) {
                step2.classList.remove('hidden');
            } else if (stepNumber === 3) {
                step3.classList.remove('hidden');
            }
            
            // Atualizar indicador de steps
            const steps = document.querySelectorAll('.step');
            steps.forEach((step, index) => {
                if (index < stepNumber) {
                    step.classList.add('completed');
                    step.classList.remove('active');
                } else if (index === stepNumber - 1) {
                    step.classList.add('active');
                    step.classList.remove('completed');
                } else {
                    step.classList.remove('active', 'completed');
                }
            });
        }
        
        function resetEvaluationForm() {
            if (evaluationForm) evaluationForm.reset();
            if (photoGrid) photoGrid.innerHTML = '';
            if (resultsContainer) resultsContainer.classList.add('hidden');
            if (resultsSection) resultsSection.classList.add('hidden');
            if (reportSection) reportSection.classList.add('hidden');
            uploadedPhotos = [];
            evaluationData = {};
            showStep(1);
        }
        
        // Funções para upload de fotos
        function handleDragOver(e) {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        }
        
        function handleDrop(e) {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            
            const files = e.dataTransfer.files;
            processFiles(files);
        }
        
        function handleFileSelect(e) {
            const files = e.target.files;
            processFiles(files);
        }
        
        function processFiles(files) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        const photo = {
                            id: Date.now() + i,
                            src: e.target.result,
                            name: file.name
                        };
                        
                        uploadedPhotos.push(photo);
                        displayPhoto(photo);
                    };
                    
                    reader.readAsDataURL(file);
                }
            }
        }
        
        function displayPhoto(photo) {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.name}">
                <button class="remove-photo-btn" data-id="${photo.id}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            photoGrid.appendChild(photoItem);
            
            // Adicionar evento para remover foto
            const removeBtn = photoItem.querySelector('.remove-photo-btn');
            removeBtn.addEventListener('click', function() {
                const photoId = parseInt(this.getAttribute('data-id'));
                removePhoto(photoId);
                photoItem.remove();
            });
        }
        
        function removePhoto(photoId) {
            uploadedPhotos = uploadedPhotos.filter(photo => photo.id !== photoId);
        }
        
        // Funções para avaliação
        function startEvaluation() {
            if (evaluationForm) {
                // Coletar dados do formulário
                const formData = new FormData(evaluationForm);
                evaluationData = {
                    propertyType: formData.get('propertyType') || '',
                    address: formData.get('address') || '',
                    area: formData.get('area') || '',
                    bedrooms: formData.get('bedrooms') || '',
                    bathrooms: formData.get('bathrooms') || '',
                    yearBuilt: formData.get('yearBuilt') || '',
                    condition: formData.get('condition') || '',
                    features: formData.get('features') || '',
                    photos: uploadedPhotos
                };
                
                // Validar dados mínimos
                if (!evaluationData.address || !evaluationData.area) {
                    showNotification('Por favor, preencha pelo menos o endereço e a área do imóvel.', 'error');
                    return;
                }
                
                // Iniciar processo de avaliação
                showStep(3);
                runEvaluation();
            }
        }
        
        function runEvaluation() {
            // Mostrar seção de progresso
            if (resultsContainer) {
                resultsContainer.classList.remove('hidden');
                resultsSection.classList.add('hidden');
                reportSection.classList.add('hidden');
            }
            
            // Simular progresso da análise
            simulateProgress();
            
            // Simular análise da IA (em um ambiente real, isso seria uma chamada de API)
            setTimeout(() => {
                generateResults();
            }, 5000); // 5 segundos para simular o processamento
        }
        
        function simulateProgress() {
            let progress = 0;
            const steps = [
                { text: 'Analisando fotos...', duration: 1000 },
                { text: 'Processando dados do imóvel...', duration: 1000 },
                { text: 'Comparando com mercado...', duration: 1000 },
                { text: 'Calculando valor estimado...', duration: 1000 },
                { text: 'Gerando relatório final...', duration: 1000 }
            ];
            
            let currentStep = 0;
            
            const interval = setInterval(() => {
                progress += 20;
                
                if (progressBar) {
                    progressBar.style.width = `${progress}%`;
                }
                
                if (progressText && currentStep < steps.length) {
                    progressText.textContent = steps[currentStep].text;
                    currentStep++;
                }
                
                if (progress >= 100) {
                    clearInterval(interval);
                }
            }, 1000);
        }
        
        function generateResults() {
            // Simular resultados da avaliação (em um ambiente real, isso viria da API)
            const basePrice = Math.floor(Math.random() * 200000) + 100000; // Preço base entre 100k e 300k
            const area = parseInt(evaluationData.area) || 100;
            const pricePerSqm = Math.floor(basePrice / area);
            
            // Fatores de ajuste
            const conditionFactor = {
                'excelente': 1.15,
                'bom': 1.05,
                'regular': 0.95,
                'precisa-reparos': 0.85
            }[evaluationData.condition] || 1;
            
            const ageFactor = evaluationData.yearBuilt ? 
                Math.max(0.8, 1 - (2023 - parseInt(evaluationData.yearBuilt)) * 0.005) : 1;
            
            const finalPrice = Math.floor(basePrice * conditionFactor * ageFactor);
            
            // Gerar problemas detectados
            const issues = [
                { type: 'high', description: 'Pintura exterior desgastada' },
                { type: 'medium', description: 'Telhado pode precisar de manutenção em 2-3 anos' },
                { type: 'low', description: 'Alguns interruptores precisam de substituição' }
            ];
            
            // Gerar fatores de valor
            const factors = [
                { name: 'Localização', value: 85, impact: 'positivo' },
                { name: 'Estado de Conservação', value: 70, impact: conditionFactor >= 1 ? 'positivo' : 'negativo' },
                { name: 'Tamanho do Lote', value: 65, impact: 'neutro' },
                { name: 'Proximidade a Serviços', value: 90, impact: 'positivo' }
            ];
            
            // Gerar recomendações
            const recommendations = [
                'Renovar a pintura exterior para aumentar o valor em até 5%',
                'Substituir as janelas antigas por modelos mais eficientes',
                'Modernizar a cozinha para atrair mais compradores'
            ];
            
            // Exibir resultados
            displayResults({
                estimatedPrice: finalPrice,
                pricePerSqm: pricePerSqm,
                confidence: Math.floor(Math.random() * 15) + 85, // 85-99%
                issues: issues,
                factors: factors,
                recommendations: recommendations,
                marketComparison: generateMarketComparison(finalPrice)
            });
        }
        
        function generateMarketComparison(estimatedPrice) {
            // Gerar dados de comparação de mercado simulados
            return [
                { name: 'Imóvel A', price: estimatedPrice * 0.9, area: Math.floor(Math.random() * 50) + 80 },
                { name: 'Imóvel B', price: estimatedPrice * 1.1, area: Math.floor(Math.random() * 50) + 80 },
                { name: 'Imóvel C', price: estimatedPrice * 0.95, area: Math.floor(Math.random() * 50) + 80 },
                { name: 'Imóvel D', price: estimatedPrice * 1.05, area: Math.floor(Math.random() * 50) + 80 }
            ];
        }
        
        function displayResults(results) {
            // Mostrar seção de resultados
            if (resultsSection) {
                resultsSection.classList.remove('hidden');
            }
            
            // Preencher dados do resultado
            const priceElement = document.getElementById('estimatedPrice');
            const pricePerSqmElement = document.getElementById('pricePerSqm');
            const confidenceElement = document.getElementById('confidenceLevel');
            const confidenceBarElement = document.getElementById('confidenceBar');
            
            if (priceElement) {
                priceElement.textContent = formatCurrency(results.estimatedPrice);
            }
            
            if (pricePerSqmElement) {
                pricePerSqmElement.textContent = `${formatCurrency(results.pricePerSqm)}/m²`;
            }
            
            if (confidenceElement) {
                confidenceElement.textContent = `${results.confidence}%`;
            }
            
            if (confidenceBarElement) {
                confidenceBarElement.style.width = `${results.confidence}%`;
            }
            
            // Preencher problemas detectados
            const issuesContainer = document.getElementById('issuesContainer');
            if (issuesContainer) {
                issuesContainer.innerHTML = '';
                
                results.issues.forEach(issue => {
                    const issueCard = document.createElement('div');
                    issueCard.className = `issue-card ${issue.type}`;
                    issueCard.innerHTML = `
                        <div class="flex items-start">
                            <div class="mr-3 mt-1">
                                ${issue.type === 'high' ? '<i class="fas fa-exclamation-circle text-red-500"></i>' : 
                                  issue.type === 'medium' ? '<i class="fas fa-exclamation-triangle text-yellow-500"></i>' : 
                                  '<i class="fas fa-info-circle text-green-500"></i>'}
                            </div>
                            <div>
                                <h4 class="font-medium">${issue.type === 'high' ? 'Problema Grave' : 
                                                       issue.type === 'medium' ? 'Problema Moderado' : 
                                                       'Observação'}</h4>
                                <p class="text-sm text-gray-600">${issue.description}</p>
                            </div>
                        </div>
                    `;
                    issuesContainer.appendChild(issueCard);
                });
            }
            
            // Preencher fatores de valor
            const factorsContainer = document.getElementById('factorsContainer');
            if (factorsContainer) {
                factorsContainer.innerHTML = '';
                
                results.factors.forEach(factor => {
                    const factorItem = document.createElement('div');
                    factorItem.className = 'factor-item';
                    factorItem.innerHTML = `
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">${factor.name}</span>
                            <span class="text-sm">${factor.value}%</span>
                        </div>
                        <div class="factor-bar">
                            <div class="factor-fill" style="width: ${factor.value}%">${factor.value}%</div>
                        </div>
                    `;
                    factorsContainer.appendChild(factorItem);
                });
            }
            
            // Preencher recomendações
            const recommendationsContainer = document.getElementById('recommendationsContainer');
            if (recommendationsContainer) {
                recommendationsContainer.innerHTML = '';
                
                results.recommendations.forEach(rec => {
                    const recItem = document.createElement('div');
                    recItem.className = 'recommendation-item';
                    recItem.innerHTML = `
                        <div class="mr-3 mt-1">
                            <i class="fas fa-lightbulb text-yellow-500"></i>
                        </div>
                        <div>
                            <p>${rec}</p>
                        </div>
                    `;
                    recommendationsContainer.appendChild(recItem);
                });
            }
            
            // Preencher comparação de mercado
            const marketComparisonContainer = document.getElementById('marketComparisonContainer');
            if (marketComparisonContainer) {
                marketComparisonContainer.innerHTML = '';
                
                const maxPrice = Math.max(...results.marketComparison.map(item => item.price));
                
                results.marketComparison.forEach((item, index) => {
                    const barHeight = (item.price / maxPrice) * 120;
                    const barPosition = 20 + (index * 80);
                    
                    const bar = document.createElement('div');
                    bar.className = 'market-bar';
                    bar.style.height = `${barHeight}px`;
                    bar.style.left = `${barPosition}px`;
                    
                    const label = document.createElement('div');
                    label.className = 'market-label';
                    label.style.left = `${barPosition + 30}px`;
                    label.textContent = item.name;
                    
                    const price = document.createElement('div');
                    price.className = 'text-xs text-center';
                    price.style.position = 'absolute';
                    price.style.bottom = `${barHeight + 25}px`;
                    price.style.left = `${barPosition}px`;
                    price.style.width = '60px';
                    price.textContent = formatCurrency(item.price);
                    
                    marketComparisonContainer.appendChild(bar);
                    marketComparisonContainer.appendChild(label);
                    marketComparisonContainer.appendChild(price);
                });
            }
            
            // Mostrar botão para ver relatório completo
            setTimeout(() => {
                if (reportSection) {
                    reportSection.classList.remove('hidden');
                }
            }, 1000);
        }
        
        function formatCurrency(value) {
            return new Intl.NumberFormat('pt-PT', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0
            }).format(value);
        }
        
        function showNotification(message, type = 'info') {
            // Criar elemento de notificação
            const notification = document.createElement('div');
            notification.className = `notification fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 ${
                type === 'error' ? 'bg-red-500 text-white' : 
                type === 'success' ? 'bg-green-500 text-white' : 
                'bg-blue-500 text-white'
            }`;
            notification.innerHTML = `
                <div class="flex items-center">
                    <i class="fas ${
                        type === 'error' ? 'fa-exclamation-circle' : 
                        type === 'success' ? 'fa-check-circle' : 
                        'fa-info-circle'
                    } mr-3"></i>
                    <span>${message}</span>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Remover notificação após 5 segundos
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 5000);
        }
        
        // Função para lidar com o envio do formulário
        function handleFormSubmit(e) {
            e.preventDefault();
            startEvaluation();
        }
        
        // Funções para o modal de compra
        function openBuyModal() {
            if (buyPropertyModal) {
                buyPropertyModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }
        
        function closeBuyModal() {
            if (buyPropertyModal) {
                buyPropertyModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }
        
        function applyBuyPropertyFilters() {
            const type = buyPropertyType.value;
            const location = buyLocation.value.toLowerCase();
            const minPrice = parseInt(buyMinPrice.value) || 0;
            const maxPrice = parseInt(buyMaxPrice.value) || Infinity;
            const bedrooms = parseInt(buyBedrooms.value) || 0;
            
            const filteredProperties = propertiesForSale.filter(property => {
                return (!type || property.type.includes(type)) &&
                       (!location || property.location.toLowerCase().includes(location)) &&
                       property.price >= minPrice &&
                       property.price <= maxPrice &&
                       property.bedrooms >= bedrooms;
            });
            
            loadBuyProperties(filteredProperties);
        }
        
        function loadBuyProperties(properties) {
            if (!buyPropertyResults) return;
            
            buyPropertyResults.innerHTML = '';
            
            if (properties.length === 0) {
                buyPropertyResults.innerHTML = `
                    <div class="p-8 text-center text-gray-500">
                        <i class="fas fa-search text-4xl mb-4"></i>
                        <p>Nenhum imóvel encontrado com os filtros selecionados.</p>
                    </div>
                `;
                return;
            }
            
            // Limitar a 50 resultados para melhor performance
            const displayProperties = properties.slice(0, 50);
            
            displayProperties.forEach(property => {
                const propertyElement = document.createElement('div');
                propertyElement.className = 'property-result-item';
                propertyElement.innerHTML = `
                    <div class="property-result-header">
                        <div>
                            <h3 class="property-result-title">${property.title}</h3>
                            <p class="property-result-location">
                                <i class="fas fa-map-marker-alt mr-2"></i> ${property.location}
                            </p>
                        </div>
                        <div class="property-result-price">${formatCurrency(property.price)}</div>
                    </div>
                    <div class="property-result-details">
                        <div class="property-result-detail">
                            <i class="fas fa-bed mr-2"></i>
                            <span>${property.bedrooms} Quartos</span>
                        </div>
                        <div class="property-result-detail">
                            <i class="fas fa-bath mr-2"></i>
                            <span>${property.bathrooms} WC</span>
                        </div>
                        <div class="property-result-detail">
                            <i class="fas fa-ruler-combined mr-2"></i>
                            <span>${property.area}m²</span>
                        </div>
                    </div>
                    <div class="property-result-features">
                        ${property.features.slice(0, 5).map(feature => `<span class="property-feature-tag">${feature}</span>`).join('')}
                        ${property.features.length > 5 ? `<span class="property-feature-tag">+${property.features.length - 5}</span>` : ''}
                    </div>
                    <div class="property-result-actions">
                        <button class="view-details-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex-1" data-id="${property.id}">
                            Ver Detalhes
                        </button>
                        <button class="save-property-btn bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition flex-1" data-id="${property.id}">
                            <i class="far fa-heart mr-2"></i> Guardar
                        </button>
                    </div>
                `;
                buyPropertyResults.appendChild(propertyElement);
            });
            
            // Adicionar event listeners aos botões
            document.querySelectorAll('.view-details-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const propertyId = parseInt(this.getAttribute('data-id'));
                    showPropertyDetails(propertyId, 'buy');
                });
            });
            
            document.querySelectorAll('.save-property-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const propertyId = parseInt(this.getAttribute('data-id'));
                    saveProperty(propertyId, 'buy');
                });
            });
        }
        
        // Funções para o modal de arrendamento
        function openRentModal() {
            if (rentPropertyModal) {
                rentPropertyModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }
        
        function closeRentModal() {
            if (rentPropertyModal) {
                rentPropertyModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }
        
        function applyRentPropertyFilters() {
            const type = rentPropertyType.value;
            const location = rentLocation.value.toLowerCase();
            const minPrice = parseInt(rentMinPrice.value) || 0;
            const maxPrice = parseInt(rentMaxPrice.value) || Infinity;
            const bedrooms = parseInt(rentBedrooms.value) || 0;
            
            const filteredProperties = propertiesForRent.filter(property => {
                return (!type || property.type.includes(type)) &&
                       (!location || property.location.toLowerCase().includes(location)) &&
                       property.price >= minPrice &&
                       property.price <= maxPrice &&
                       property.bedrooms >= bedrooms;
            });
            
            loadRentProperties(filteredProperties);
        }
        
        function loadRentProperties(properties) {
            if (!rentPropertyResults) return;
            
            rentPropertyResults.innerHTML = '';
            
            if (properties.length === 0) {
                rentPropertyResults.innerHTML = `
                    <div class="p-8 text-center text-gray-500">
                        <i class="fas fa-search text-4xl mb-4"></i>
                        <p>Nenhum imóvel encontrado com os filtros selecionados.</p>
                    </div>
                `;
                return;
            }
            
            // Limitar a 50 resultados para melhor performance
            const displayProperties = properties.slice(0, 50);
            
            displayProperties.forEach(property => {
                const propertyElement = document.createElement('div');
                propertyElement.className = 'property-result-item';
                propertyElement.innerHTML = `
                    <div class="property-result-header">
                        <div>
                            <h3 class="property-result-title">${property.title}</h3>
                            <p class="property-result-location">
                                <i class="fas fa-map-marker-alt mr-2"></i> ${property.location}
                            </p>
                        </div>
                        <div class="property-result-price">${formatCurrency(property.price)}/mês</div>
                    </div>
                    <div class="property-result-details">
                        <div class="property-result-detail">
                            <i class="fas fa-bed mr-2"></i>
                            <span>${property.bedrooms} Quartos</span>
                        </div>
                        <div class="property-result-detail">
                            <i class="fas fa-bath mr-2"></i>
                            <span>${property.bathrooms} WC</span>
                        </div>
                        <div class="property-result-detail">
                            <i class="fas fa-ruler-combined mr-2"></i>
                            <span>${property.area}m²</span>
                        </div>
                    </div>
                    <div class="property-result-features">
                        ${property.features.slice(0, 5).map(feature => `<span class="property-feature-tag">${feature}</span>`).join('')}
                        ${property.features.length > 5 ? `<span class="property-feature-tag">+${property.features.length - 5}</span>` : ''}
                    </div>
                    <div class="property-result-actions">
                        <button class="view-details-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex-1" data-id="${property.id}">
                            Ver Detalhes
                        </button>
                        <button class="save-property-btn bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition flex-1" data-id="${property.id}">
                            <i class="far fa-heart mr-2"></i> Guardar
                        </button>
                    </div>
                `;
                rentPropertyResults.appendChild(propertyElement);
            });
            
            // Adicionar event listeners aos botões
            document.querySelectorAll('.view-details-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const propertyId = parseInt(this.getAttribute('data-id'));
                    showPropertyDetails(propertyId, 'rent');
                });
            });
            
            document.querySelectorAll('.save-property-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const propertyId = parseInt(this.getAttribute('data-id'));
                    saveProperty(propertyId, 'rent');
                });
            });
        }
        
        // Funções para o modal de detalhes do imóvel
        function showPropertyDetails(propertyId, type) {
            const properties = type === 'buy' ? propertiesForSale : propertiesForRent;
            const property = properties.find(p => p.id === propertyId);
            
            if (!property) return;
            
            if (propertyDetailsModal) {
                propertyDetailsModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                
                // Preencher informações do imóvel
                if (propertyDetailsTitle) {
                    propertyDetailsTitle.textContent = property.title;
                }
                
                if (propertyMainImage) {
                    propertyMainImage.src = property.image;
                }
                
                if (propertyDescription) {
                    propertyDescription.textContent = property.description;
                }
                
                if (propertyFeatures) {
                    propertyFeatures.innerHTML = '';
                    property.features.forEach(feature => {
                        const featureElement = document.createElement('div');
                        featureElement.className = 'property-feature-item';
                        featureElement.innerHTML = `
                            <i class="fas fa-check-circle text-green-500 mr-2"></i>
                            <span>${feature}</span>
                        `;
                        propertyFeatures.appendChild(featureElement);
                    });
                }
                
                if (propertyPrice) {
                    propertyPrice.textContent = type === 'buy' ? 
                        formatCurrency(property.price) : 
                        `${formatCurrency(property.price)}/mês`;
                }
                
                if (propertyArea) {
                    propertyArea.textContent = `${property.area}m²`;
                }
                
                if (propertyBedrooms) {
                    propertyBedrooms.textContent = `${property.bedrooms} Quartos`;
                }
                
                if (propertyBathrooms) {
                    propertyBathrooms.textContent = `${property.bathrooms} WC`;
                }
                
                if (propertyType) {
                    propertyType.textContent = property.type.charAt(0).toUpperCase() + property.type.slice(1);
                }
            }
        }
        
        function closePropertyDetails() {
            if (propertyDetailsModal) {
                propertyDetailsModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }
        
        // Funções para o painel de imóveis guardados
        function toggleSavedProperties() {
            if (savedPropertiesPanel) {
                savedPropertiesPanel.classList.toggle('show');
            }
        }
        
        function saveProperty(propertyId, type) {
            const properties = type === 'buy' ? propertiesForSale : propertiesForRent;
            const property = properties.find(p => p.id === propertyId);
            
            if (!property) return;
            
            // Verificar se o imóvel já está guardado
            const existingIndex = savedPropertiesList.findIndex(p => p.id === propertyId && p.type === type);
            
            if (existingIndex === -1) {
                // Adicionar imóvel guardado
                savedPropertiesList.push({
                    ...property,
                    type: type,
                    savedAt: new Date().toISOString()
                });
                
                // Atualizar localStorage
                localStorage.setItem('savedProperties', JSON.stringify(savedPropertiesList));
                
                // Atualizar UI
                updateSavedPropertiesUI();
                
                // Mostrar notificação
                showNotification('Imóvel guardado com sucesso!', 'success');
                
                // Atualizar botão
                const saveBtn = document.querySelector(`.save-property-btn[data-id="${propertyId}"]`);
                if (saveBtn) {
                    saveBtn.innerHTML = '<i class="fas fa-heart mr-2"></i> Guardado';
                    saveBtn.classList.remove('bg-gray-200', 'hover:bg-gray-300', 'text-gray-800');
                    saveBtn.classList.add('bg-red-100', 'hover:bg-red-200', 'text-red-600');
                }
            } else {
                // Remover imóvel guardado
                savedPropertiesList.splice(existingIndex, 1);
                
                // Atualizar localStorage
                localStorage.setItem('savedProperties', JSON.stringify(savedPropertiesList));
                
                // Atualizar UI
                updateSavedPropertiesUI();
                
                // Mostrar notificação
                showNotification('Imóvel removido dos guardados', 'info');
                
                // Atualizar botão
                const saveBtn = document.querySelector(`.save-property-btn[data-id="${propertyId}"]`);
                if (saveBtn) {
                    saveBtn.innerHTML = '<i class="far fa-heart mr-2"></i> Guardar';
                    saveBtn.classList.remove('bg-red-100', 'hover:bg-red-200', 'text-red-600');
                    saveBtn.classList.add('bg-gray-200', 'hover:bg-gray-300', 'text-gray-800');
                }
            }
        }
        
        function loadSavedProperties() {
            const saved = localStorage.getItem('savedProperties');
            if (saved) {
                savedPropertiesList = JSON.parse(saved);
                updateSavedPropertiesUI();
            }
        }
        
        function updateSavedPropertiesUI() {
            if (!savedPropertiesListContainer) return;
            
            savedPropertiesListContainer.innerHTML = '';
            
            if (savedPropertiesList.length === 0) {
                savedPropertiesListContainer.innerHTML = `
                    <div class="text-center text-gray-500 py-4">
                        <p>Não há imóveis guardados</p>
                    </div>
                `;
                return;
            }
            
            savedPropertiesList.forEach(property => {
                const propertyElement = document.createElement('div');
                propertyElement.className = 'saved-property-item';
                propertyElement.innerHTML = `
                    <span class="saved-property-remove" data-id="${property.id}" data-type="${property.type}">
                        <i class="fas fa-times"></i>
                    </span>
                    <div class="saved-property-title">${property.title}</div>
                    <div class="saved-property-price">${property.type === 'buy' ? 
                        formatCurrency(property.price) : 
                        `${formatCurrency(property.price)}/mês`}</div>
                `;
                savedPropertiesListContainer.appendChild(propertyElement);
            });
            
            // Adicionar event listeners aos botões de remover
            document.querySelectorAll('.saved-property-remove').forEach(btn => {
                btn.addEventListener('click', function() {
                    const propertyId = parseInt(this.getAttribute('data-id'));
                    const type = this.getAttribute('data-type');
                    removeSavedProperty(propertyId, type);
                });
            });
        }
        
        function removeSavedProperty(propertyId, type) {
            const index = savedPropertiesList.findIndex(p => p.id === propertyId && p.type === type);
            
            if (index !== -1) {
                savedPropertiesList.splice(index, 1);
                
                // Atualizar localStorage
                localStorage.setItem('savedProperties', JSON.stringify(savedPropertiesList));
                
                // Atualizar UI
                updateSavedPropertiesUI();
                
                // Mostrar notificação
                showNotification('Imóvel removido dos guardados', 'info');
                
                // Atualizar botão no modal correspondente
                const saveBtn = document.querySelector(`.save-property-btn[data-id="${propertyId}"]`);
                if (saveBtn) {
                    saveBtn.innerHTML = '<i class="far fa-heart mr-2"></i> Guardar';
                    saveBtn.classList.remove('bg-red-100', 'hover:bg-red-200', 'text-red-600');
                    saveBtn.classList.add('bg-gray-200', 'hover:bg-gray-300', 'text-gray-800');
                }
            }
        }
        
        // Funções para o simulador de crédito
        function openCreditSimulator() {
            if (creditSimulatorModal) {
                creditSimulatorModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                resetCreditSimulation();
            }
        }
        
        function closeCreditSimulator() {
            if (creditSimulatorModal) {
                creditSimulatorModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }
        
        function calculateCreditSimulation() {
            const propertyVal = parseFloat(propertyValue.value) || 0;
            const downPay = parseFloat(downPayment.value) || 0;
            const term = parseInt(loanTerm.value) || 0;
            const rate = parseFloat(interestRate.value) || 0;
            
            if (propertyVal <= 0 || downPay < 0 || term <= 0 || rate < 0) {
                showNotification('Por favor, preencha todos os campos corretamente.', 'error');
                return;
            }
            
            if (downPay >= propertyVal) {
                showNotification('A entrada deve ser inferior ao valor do imóvel.', 'error');
                return;
            }
            
            const financedAmount = propertyVal - downPay;
            const monthlyRate = rate / 100 / 12;
            const numPayments = term * 12;
            
            // Cálculo da prestação mensal (fórmula de amortização constante)
            const monthlyPayment = financedAmount * 
                (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                (Math.pow(1 + monthlyRate, numPayments) - 1);
            
            const totalPayment = monthlyPayment * numPayments;
            const totalInterest = totalPayment - financedAmount;
            
            // Exibir resultados
            document.getElementById('financedAmount').textContent = formatCurrency(financedAmount);
            document.getElementById('monthlyPayment').textContent = formatCurrency(monthlyPayment);
            document.getElementById('totalInterest').textContent = formatCurrency(totalInterest);
            document.getElementById('totalPayment').textContent = formatCurrency(totalPayment);
            
            // Gerar tabela de amortização (primeiros 12 meses)
            generateAmortizationTable(financedAmount, monthlyRate, numPayments, monthlyPayment);
            
            // Mostrar resultados
            creditResults.classList.remove('hidden');
        }
        
        function generateAmortizationTable(principal, monthlyRate, numPayments, monthlyPayment) {
            const tableBody = document.getElementById('amortizationTableBody');
            tableBody.innerHTML = '';
            
            let balance = principal;
            
            for (let month = 1; month <= Math.min(12, numPayments); month++) {
                const interestPayment = balance * monthlyRate;
                const principalPayment = monthlyPayment - interestPayment;
                balance -= principalPayment;
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${month}</td>
                    <td>${formatCurrency(monthlyPayment)}</td>
                    <td>${formatCurrency(principalPayment)}</td>
                    <td>${formatCurrency(interestPayment)}</td>
                    <td>${formatCurrency(Math.max(0, balance))}</td>
                `;
                tableBody.appendChild(row);
            }
        }
        
        function resetCreditSimulation() {
            if (creditResults) {
                creditResults.classList.add('hidden');
            }
            if (document.getElementById('creditSimulatorForm')) {
                document.getElementById('creditSimulatorForm').reset();
            }
        }
        
        function downloadCreditReport() {
            showNotification('Relatório de simulação gerado com sucesso!', 'success');
            // Em um ambiente real, aqui seria gerado um PDF ou arquivo para download
        }
        
        // Funções para demonstração
        function showDemo() {
            // Abrir modal de avaliação com dados pré-preenchidos
            openEvaluationModal();
            
            // Preencher formulário com dados de demonstração
            if (evaluationForm) {
                evaluationForm.propertyType.value = 'apartamento';
                evaluationForm.address.value = 'Avenida da Liberdade, Lisboa';
                evaluationForm.area.value = '120';
                evaluationForm.bedrooms.value = '3';
                evaluationForm.bathrooms.value = '2';
                evaluationForm.yearBuilt.value = '2010';
                evaluationForm.condition.value = 'bom';
                evaluationForm.features.value = 'Ar condicionado, Garagem, Varanda, Vista cidade';
            }
            
            // Avançar para o passo 2
            showStep(2);
            
            // Adicionar fotos de demonstração
            setTimeout(() => {
                const demoPhotos = [
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ];
                
                demoPhotos.forEach((src, index) => {
                    const photo = {
                        id: Date.now() + index,
                        src: src,
                        name: `Demo Photo ${index + 1}`
                    };
                    
                    uploadedPhotos.push(photo);
                    displayPhoto(photo);
                });
            }, 500);
            
            showNotification('Demonstração carregada! Clique em "Iniciar Avaliação" para ver como funciona.', 'info');
        }
        
        // Funções para o chatbot
        function openChatbot() {
            if (chatbotModal) {
                chatbotModal.classList.remove('hidden');
                
                // Focar no input
                setTimeout(() => {
                    if (chatbotInput) {
                        chatbotInput.focus();
                    }
                }, 100);
            }
        }
        
        function handleChatbotMessage(e) {
            e.preventDefault();
            
            const message = chatbotInput.value.trim();
            if (!message) return;
            
            // Adicionar mensagem do usuário
            addChatMessage(message, 'user');
            
            // Limpar input
            chatbotInput.value = '';
            
            // Mostrar indicador de digitação
            showTypingIndicator();
            
            // Processar mensagem e responder
            setTimeout(() => {
                const response = processChatMessage(message);
                removeTypingIndicator();
                addChatMessage(response, 'bot');
            }, 1000);
        }
        
        function addChatMessage(message, sender) {
            if (!chatbotMessages) return;
            
            const messageElement = document.createElement('div');
            messageElement.className = `chatbot-message ${sender}`;
            
            const bubbleElement = document.createElement('div');
            bubbleElement.className = 'chatbot-message-bubble';
            bubbleElement.textContent = message;
            
            messageElement.appendChild(bubbleElement);
            chatbotMessages.appendChild(messageElement);
            
            // Rolar para o final
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        function showTypingIndicator() {
            if (!chatbotMessages) return;
            
            const typingElement = document.createElement('div');
            typingElement.className = 'chatbot-message bot';
            typingElement.id = 'typingIndicator';
            
            const bubbleElement = document.createElement('div');
            bubbleElement.className = 'chatbot-typing';
            
            for (let i = 0; i < 3; i++) {
                const dot = document.createElement('span');
                dot.className = 'chatbot-typing-dot';
                bubbleElement.appendChild(dot);
            }
            
            typingElement.appendChild(bubbleElement);
            chatbotMessages.appendChild(typingElement);
            
            // Rolar para o final
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        function removeTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
        }
        
        function processChatMessage(message) {
            const lowerMessage = message.toLowerCase();
            
            // Comandos específicos
            if (lowerMessage.includes('ajuda') || lowerMessage.includes('help')) {
                return "Posso ajudar você a encontrar imóveis, fornecer informações sobre propriedades específicas, ou responder perguntas sobre o mercado imobiliário. Tente perguntar sobre um imóvel específico ou diga o que você está procurando!";
            }
            
            // Busca por imóveis
            if (lowerMessage.includes('apartamento') || lowerMessage.includes('moradia') || lowerMessage.includes('casa')) {
                const type = lowerMessage.includes('apartamento') ? 'apartamento' : 
                           lowerMessage.includes('moradia') ? 'moradia' : 'casa';
                
                const properties = [...propertiesForSale, ...propertiesForRent].filter(p => p.type.includes(type));
                
                if (properties.length > 0) {
                    const randomProperty = properties[Math.floor(Math.random() * properties.length)];
                    return `Encontramos ${properties.length} ${type}s. Por exemplo, temos um "${randomProperty.title}" em ${randomProperty.location} por ${randomProperty.type === 'buy' ? formatCurrency(randomProperty.price) : formatCurrency(randomProperty.price) + '/mês'}. Deseja saber mais detalhes sobre este imóvel?`;
                } else {
                    return `No momento não temos ${type}s disponíveis. Que tal verificar outras opções?`;
                }
            }
            
            // Busca por localização
            if (lowerMessage.includes('lisboa') || lowerMessage.includes('porto') || lowerMessage.includes('cascais')) {
                const location = lowerMessage.includes('lisboa') ? 'Lisboa' : 
                               lowerMessage.includes('porto') ? 'Porto' : 'Cascais';
                
                const properties = [...propertiesForSale, ...propertiesForRent].filter(p => 
                    p.location.toLowerCase().includes(location.toLowerCase())
                );
                
                if (properties.length > 0) {
                    return `Temos ${properties.length} imóveis em ${location}. Os preços variam entre ${formatCurrency(Math.min(...properties.map(p => p.price)))} e ${formatCurrency(Math.max(...properties.map(p => p.price)))}. Posso ajudar você a encontrar o imóvel perfeito para suas necessidades!`;
                } else {
                    return `No momento não temos imóveis disponíveis em ${location}. Que tal verificar outras localizações?`;
                }
            }
            
            // Busca por preço
            if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custo')) {
                return `Nossos imóveis para venda variam entre ${formatCurrency(Math.min(...propertiesForSale.map(p => p.price)))} e ${formatCurrency(Math.max(...propertiesForSale.map(p => p.price)))}. Para arrendamento, os valores vão de ${formatCurrency(Math.min(...propertiesForRent.map(p => p.price)))}/mês a ${formatCurrency(Math.max(...propertiesForRent.map(p => p.price)))}/mês. Qual faixa de preço você está considerando?`;
            }
            
            // Informações sobre imóveis específicos
            if (lowerMessage.includes('vista tejo') || lowerMessage.includes('parque das nações')) {
                const property = propertiesForSale.find(p => p.title.includes('Vista Tejo'));
                if (property) {
                    const response = `O apartamento com Vista Tejo no Parque das Nações é uma excelente opção! Ele tem ${property.area}m², ${property.bedrooms} quartos e está à venda por ${formatCurrency(property.price)}. `;
                    if (property.agentNotes) {
                        response += property.agentNotes;
                    }
                    return response;
                }
            }
            
            if (lowerMessage.includes('cascais') || lowerMessage.includes('estoril')) {
                const properties = [...propertiesForSale, ...propertiesForRent].filter(p => 
                    p.location.toLowerCase().includes('cascais') || p.location.toLowerCase().includes('estoril')
                );
                if (properties.length > 0) {
                    const property = properties[0];
                    const response = `Em Cascais/Estoril temos excelentes opções! Por exemplo, "${property.title}" com ${property.area}m² por ${property.type === 'buy' ? formatCurrency(property.price) : formatCurrency(property.price) + '/mês'}. `;
                    if (property.agentNotes) {
                        response += property.agentNotes;
                    }
                    return response;
                }
            }
            
            // Perguntas sobre financiamento
            if (lowerMessage.includes('crédito') || lowerMessage.includes('financiamento') || lowerMessage.includes('empréstimo')) {
                return `Podemos ajudar você a simular o financiamento do seu imóvel! Utilize nosso simulador de crédito para calcular as prestações mensais com base no valor do imóvel, entrada, prazo e taxa de juro. Posso abrir o simulador para você agora?`;
            }
            
            // Perguntas sobre avaliação
            if (lowerMessage.includes('avaliar') || lowerMessage.includes('avaliação') || lowerMessage.includes('valor')) {
                return `Nossa tecnologia de IA pode avaliar qualquer imóvel com precisão! Basta fornecer algumas informações básicas e fotos do imóvel. O sistema analisa diversos fatores como localização, estado de conservação, características do imóvel e dados de mercado para fornecer uma avaliação confiável. Posso abrir o módulo de avaliação para você agora?`;
            }
            
            // Saudações
            if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('bom dia')) {
                return `Olá! Sou o agente virtual da CasaPerfeita. Como posso ajudar você hoje? Posso fornecer informações sobre nossos imóveis, ajudar na busca pela propriedade ideal, ou responder perguntas sobre o mercado imobiliário.`;
            }
            
            // Resposta padrão
            return `Entendi sua pergunta. Para fornecer informações mais precisas, poderia me dizer mais detalhes sobre o que você está procurando? Por exemplo: tipo de imóvel, localização preferida, faixa de preço, ou número de quartos?`;
        }
        
        // Outras funcionalidades (mobile menu, back to top, etc.)
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileNav.classList.toggle('hidden');
            });
        }
        
        // Back to top button
        const backToTopBtn = document.getElementById('backToTopBtn');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('opacity-0', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                backToTopBtn.classList.add('opacity-0', 'invisible');
                backToTopBtn.classList.remove('opacity-100', 'visible');
            }
        });
        
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Login functionality
        const loginBtn = document.getElementById('loginBtn');
        const userText = document.getElementById('userText');
        const userPoints = document.getElementById('userPoints');
        
        if (loginBtn) {
            loginBtn.addEventListener('click', function() {
                // Simular login
                if (userText.textContent === 'Entrar') {
                    userText.textContent = 'João Silva';
                    userPoints.classList.remove('hidden');
                    userPoints.textContent = '1,250 pts';
                    showNotification('Login efetuado com sucesso!', 'success');
                } else {
                    userText.textContent = 'Entrar';
                    userPoints.classList.add('hidden');
                    showNotification('Sessão terminada', 'info');
                }
            });
        }


// === CasaPerfeita helpers & patches ===
const DATA_URL = 'data/properties.json?v=' + Date.now();
const fmtEUR = (n) => Number(n || 0).toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });

function getMedia(prop) {
  const m = (prop && prop.media && prop.media[0]) || {};
  const thumb = m.thumb || m.url || `https://picsum.photos/seed/${prop?.id || 'home'}/420/280`;
  const url = m.url || thumb;
  return { thumb, url };
}

function conditionBadge(cond) {
  if (!cond) return '';
  const map = {
    'Renovado': 'bg-green-100 text-green-700',
    'Bom': 'bg-emerald-100 text-emerald-700',
    'Usado': 'bg-amber-100 text-amber-700',
    'A precisar de obras': 'bg-red-100 text-red-700',
    'Devoluto': 'bg-gray-100 text-gray-700'
  };
  const cls = map[cond] || 'bg-gray-100 text-gray-700';
  return `<span class="text-xs px-2 py-1 rounded ${cls}">${cond}</span>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (mobileMenuBtn && mobileNav && !mobileMenuBtn.dataset.bound) {
    mobileMenuBtn.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
    mobileMenuBtn.dataset.bound = '1';
  }
});

function showPropertyDetails(prop, kind) {
  const { url, thumb } = getMedia(prop);
  const priceStr = kind === 'rent' ? `${fmtEUR(prop.price)}/mês` : fmtEUR(prop.price);
  const extras = [
    prop.bedrooms ? `${prop.bedrooms} quartos` : null,
    prop.bathrooms ? `${prop.bathrooms} wc` : null,
    prop.typology ? prop.typology : null,
    `${prop.area} m²`,
    (Number.isFinite(prop.floor) && prop.typology !== 'Moradia') ? `${prop.floor}º andar` : null,
    prop.parking_spots ? `${prop.parking_spots} estacionamento` : null,
    prop.energy ? `Energia ${prop.energy}` : null,
  ].filter(Boolean).join(' · ');
  const fees = [
    (kind === 'buy' && prop.condo_fee > 0) ? `Condomínio: ${fmtEUR(prop.condo_fee)}` : null,
    prop.condition ? `Estado: ${prop.condition}` : null,
    prop.yearBuilt ? `Ano: ${prop.yearBuilt}` : null,
  ].filter(Boolean).join(' | ');
  const html = `
    <div class="p-0">
      <img src="${url}" onerror="this.src='${thumb}'" class="w-full h-64 object-cover rounded-t-xl" alt="${prop.title || 'Imóvel'}">
      <div class="p-4">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold">${prop.title || prop.typology}</h3>
          <div class="text-2xl font-extrabold">${priceStr}</div>
        </div>
        <p class="text-gray-500">${prop.location?.city || ''}${prop.location?.district ? ', ' + prop.location.district : ''}</p>
        <div class="mt-2">${conditionBadge(prop.condition)}</div>
        <p class="mt-2 text-sm text-gray-700">${extras}</p>
        ${fees ? `<p class="mt-1 text-xs text-gray-500">${fees}</p>` : ''}
        <p class="mt-3 text-gray-700">${prop.description || ''}</p>
      </div>
    </div>
  `;
  const modalBody = document.querySelector('#propertyModalBody');
  if (modalBody) modalBody.innerHTML = html;
  const modal = document.querySelector('#propertyModal');
  if (modal) modal.classList.remove('hidden');
  modal?.querySelector('.close-modal')?.addEventListener('click', () => modal.classList.add('hidden'));
}

function bindDetailButtons(propertiesForSale, propertiesForRent) {
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = String(e.currentTarget.dataset.id);
      const kind = e.currentTarget.dataset.kind;
      const list = (kind === 'rent') ? propertiesForRent : propertiesForSale;
      const prop = list.find(p => String(p.id) === id);
      if (prop) showPropertyDetails(prop, kind);
    });
  });
}

function chatbotExample(properties, type) {
  if (!properties?.length) return "Não encontrei resultados para já. Quer tentar com outros filtros?";
  const p = properties[Math.floor(Math.random() * properties.length)];
  const isRent = (type?.toLowerCase() === 'arrendar' || type?.toLowerCase() === 'rent');
  const priceStr = isRent ? `${fmtEUR(p.price)}/mês` : fmtEUR(p.price);
  const city = p.location?.city || p.location || '';
  return `Encontrámos ${properties.length} ${type}s. Exemplo: "${p.title}" em ${city} por ${priceStr}. Queres ver mais detalhes?`;
}
