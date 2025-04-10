interface Widget {
    render(): void
}

class ButtonWidget implements Widget {
    render(): void { }
}


class ChartWidget implements Widget {
    render(): void { }
}

abstract class WidgetFactory {
    abstract createWidget(): Widget
}

class ButtonFactory extends WidgetFactory {
    createWidget(): Widget { return new ButtonWidget() }
}

class ChartFactory extends WidgetFactory {
    createWidget(): Widget { return new ButtonWidget() }
}