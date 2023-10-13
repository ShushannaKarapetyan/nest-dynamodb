import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {AppService} from './app.service';
import {UserModule} from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        UserModule,
    ],
    providers: [AppService],
})

export class AppModule {
}
