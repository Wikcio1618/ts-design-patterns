abstract class Button { }

abstract class Chart { }

class DarkButton extends Button { }

class LightButton extends Button { }

class DarkChart extends Chart { }

class LightChart extends Chart { }

interface ThemeFactory {
    createButton(): Button,
    createChart(): Chart
}

class LightFactory implements ThemeFactory {
    createButton(): Button { return new LightButton() }
    createChart(): Chart { return new LightChart() }
}

class DarkFactory implements ThemeFactory {
    createButton(): Button { return new DarkButton() }
    createChart(): Chart { return new DarkChart() }
}

class Client {
    constructor(private factory: ThemeFactory) { }

    renderWidgets(): void {
        this.factory.createButton()
        this.factory.createChart()
    }
}

